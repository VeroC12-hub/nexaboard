/**
 * How the lesson videos are rendered.
 *
 * H.264 in an MP4, which every phone in Ghana can play without asking. The
 * concurrency is deliberately low: this renders on the same machine that runs
 * the tutor worker, and starving that to make a video faster would be the wrong
 * trade.
 */
import { Config } from '@remotion/cli/config'

Config.setVideoImageFormat('jpeg')
Config.setCodec('h264')
Config.setConcurrency(2)
Config.setChromiumOpenGlRenderer('angle')
