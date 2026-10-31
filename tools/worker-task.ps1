# Keep the tutor worker running, without anybody remembering to start it.
#
# ── Why this exists ──────────────────────────────────────────────────────────
#
# With no ANTHROPIC_API_KEY on the deployment, every lesson a learner opens is
# queued for this machine: `api/queue.js` stores the job and `tools/tutor-worker.mjs`
# answers it through Claude Code. That makes lessons free, and it makes them
# depend on a terminal somebody opened by hand. When that terminal is closed, or
# the laptop slept, or the window was shut last Friday, the learner waits four
# minutes and is then told the lesson could not be written. Nothing on either
# end says why.
#
# So the worker becomes a scheduled task: it starts at logon, restarts when it
# falls over, and never times out. The comment in `tools/tutor-prod.mjs` says
# "this is the command that has to be run every day". After this, it is not.
#
# ── Usage ────────────────────────────────────────────────────────────────────
#
#   powershell -ExecutionPolicy Bypass -File tools\worker-task.ps1 install
#   powershell -ExecutionPolicy Bypass -File tools\worker-task.ps1 status
#   powershell -ExecutionPolicy Bypass -File tools\worker-task.ps1 start
#   powershell -ExecutionPolicy Bypass -File tools\worker-task.ps1 stop
#   powershell -ExecutionPolicy Bypass -File tools\worker-task.ps1 uninstall
#
# It installs for the current user only and needs no administrator rights, which
# is also why it cannot run while signed out: a per user task waits for a logon.
# That is the right trade here, because the worker signs in to Claude Code as
# this user and a SYSTEM task would have no such sign in.
#
# ── What it does NOT fix ─────────────────────────────────────────────────────
#
# A machine that is off, asleep or off the network answers nothing. This removes
# the human step, not the dependency. The permanent fix is an API key on the
# deployment, which makes the queue a fallback rather than the only route.

param(
  [Parameter(Position = 0)]
  [ValidateSet('install', 'uninstall', 'status', 'start', 'stop')]
  [string]$Action = 'status'
)

$ErrorActionPreference = 'Stop'

$TaskName = 'NEXA-EDU tutor worker'
# The repository, found from this script rather than assumed, so a copy of the
# project in another folder registers a task that points at itself.
$Repo = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)

function Get-Task {
  Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
}

function Install-Worker {
  if (-not (Test-Path (Join-Path $Repo 'package.json'))) {
    throw "No package.json in $Repo. Run this from the project's tools folder."
  }
  if (-not (Test-Path (Join-Path $Repo '.env'))) {
    Write-Warning "No .env in $Repo. The worker reads EDU_SITE and its queue key from there, so it will not answer anything until that file exists."
  }

  # cmd.exe rather than npm.cmd directly: npm is a shim, and Task Scheduler
  # wants a real executable with its arguments separate.
  $action = New-ScheduledTaskAction `
    -Execute "$env:ComSpec" `
    -Argument '/c npm run tutor:prod' `
    -WorkingDirectory $Repo

  $trigger = New-ScheduledTaskTrigger -AtLogOn -User $env:USERNAME

  $settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -StartWhenAvailable `
    -RestartCount 999 `
    -RestartInterval (New-TimeSpan -Minutes 1) `
    -ExecutionTimeLimit (New-TimeSpan -Seconds 0) `
    -MultipleInstances IgnoreNew
  # Hidden, because this is a background service and a console window that
  # steals focus at every logon is a window somebody will close.
  $settings.Hidden = $true

  if (Get-Task) {
    Set-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings | Out-Null
    Write-Host "Updated the task '$TaskName'."
  }
  else {
    Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings `
      -Description 'Answers queued NEXA-EDU lesson jobs through Claude Code. See tools/worker-task.ps1.' | Out-Null
    Write-Host "Installed the task '$TaskName'."
  }

  Start-ScheduledTask -TaskName $TaskName
  Write-Host 'Started it. It will now start again at every logon and restart if it stops.'
  Show-Status
}

function Show-Status {
  $t = Get-Task
  if (-not $t) {
    Write-Host "Not installed. Run: powershell -ExecutionPolicy Bypass -File tools\worker-task.ps1 install"
    return
  }
  $info = Get-ScheduledTaskInfo -TaskName $TaskName
  Write-Host "Task      : $TaskName"
  Write-Host "State     : $($t.State)"
  Write-Host "Last run  : $($info.LastRunTime)"
  Write-Host "Last result: $($info.LastTaskResult)  (0 means it is running or exited cleanly)"
  Write-Host "Next run  : $($info.NextRunTime)"
  Write-Host "Folder    : $Repo"
}

switch ($Action) {
  'install' { Install-Worker }
  'uninstall' {
    if (Get-Task) {
      Stop-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
      Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
      Write-Host "Removed '$TaskName'. Lessons will queue with nothing to answer them."
    }
    else { Write-Host 'It was not installed.' }
  }
  'start' { Start-ScheduledTask -TaskName $TaskName; Show-Status }
  'stop' { Stop-ScheduledTask -TaskName $TaskName; Show-Status }
  default { Show-Status }
}
