/**
 * Certificate of Completion PDFs, drawn in the browser with jsPDF.
 *
 * Wording rules (deliberate, do not "improve"):
 *   - It says "Certificate of Completion". Never "Certified", never "certify",
 *     because this records that a learner completed NexaCore training. It is
 *     not a vendor certification, and the footer says so.
 *   - No software vendor names or logos. The course name is whatever the
 *     teacher typed, e.g. "AutoCAD for Young Engineers", which describes the
 *     subject; nothing claims endorsement.
 *   - No em or en dashes anywhere in the text.
 */
import { jsPDF } from 'jspdf'
import QRCode from 'qrcode'
import { verifyUrl, type Certificate, type Course } from './attendance'

const TEAL: [number, number, number] = [0, 143, 166]   // #008FA6
const LIME: [number, number, number] = [199, 199, 4]   // #C7C704
const NAVY: [number, number, number] = [27, 43, 75]    // #1b2b4b
const GREY: [number, number, number] = [107, 114, 128]

const NEXACORE_LOGO = '/brand/nexacore-logo-hd.jpg'

interface LoadedImage { data: string; w: number; h: number }

/** Any image the browser can show, re-encoded as PNG so jsPDF accepts it. */
async function loadImage(src: string): Promise<LoadedImage | null> {
  try {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.decoding = 'async'
    const ok = await new Promise<boolean>(resolve => {
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = src
    })
    if (!ok || !img.naturalWidth) return null
    const canvas = document.createElement('canvas')
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const ctx = canvas.getContext('2d')
    if (!ctx) return null
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0)
    return { data: canvas.toDataURL('image/png'), w: img.naturalWidth, h: img.naturalHeight }
  } catch {
    return null // tainted canvas (no CORS) or decode failure: fall back to text
  }
}

/** Fit an image into a box, keeping its shape, aligned left, centre or right. */
function placeImage(doc: jsPDF, img: LoadedImage, x: number, y: number, boxW: number, boxH: number, align: 'left' | 'center' | 'right') {
  const scale = Math.min(boxW / img.w, boxH / img.h)
  const w = img.w * scale
  const h = img.h * scale
  const left = align === 'left' ? x : align === 'right' ? x + boxW - w : x + (boxW - w) / 2
  doc.addImage(img.data, 'PNG', left, y + (boxH - h) / 2, w, h)
}

const longDate = (iso: string | null | undefined) =>
  iso ? new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

const hoursText = (h: number) => `${Number.isInteger(h) ? h : h.toFixed(1)} hour${h === 1 ? '' : 's'}`

/** Shrink a font until a line fits the width. */
function fitText(doc: jsPDF, text: string, maxW: number, start: number, min: number) {
  let size = start
  doc.setFontSize(size)
  while (size > min && doc.getTextWidth(text) > maxW) {
    size -= 1
    doc.setFontSize(size)
  }
}

interface Assets { nexacore: LoadedImage | null; partner: LoadedImage | null }

async function loadAssets(course: Pick<Course, 'partner_logo_url'>): Promise<Assets> {
  const [nexacore, partner] = await Promise.all([
    loadImage(NEXACORE_LOGO),
    course.partner_logo_url ? loadImage(course.partner_logo_url) : Promise.resolve(null),
  ])
  return { nexacore, partner }
}

async function drawPage(doc: jsPDF, cert: Certificate, course: Course, assets: Assets) {
  const W = doc.internal.pageSize.getWidth()   // 297
  const H = doc.internal.pageSize.getHeight()  // 210
  const cx = W / 2

  // Frame: teal outer band, lime hairline inside, small lime corner marks.
  doc.setFillColor(255, 255, 255)
  doc.rect(0, 0, W, H, 'F')
  doc.setDrawColor(...TEAL)
  doc.setLineWidth(2.4)
  doc.rect(8, 8, W - 16, H - 16)
  doc.setDrawColor(...LIME)
  doc.setLineWidth(0.6)
  doc.rect(12, 12, W - 24, H - 24)
  doc.setFillColor(...LIME)
  for (const [x, y] of [[12, 12], [W - 12, 12], [12, H - 12], [W - 12, H - 12]] as const) {
    doc.rect(x - 2.5, y - 2.5, 5, 5, 'F')
  }

  // Logos: NexaCore left, partner right (or the partner's name if no logo).
  if (assets.nexacore) placeImage(doc, assets.nexacore, 22, 18, 62, 28, 'left')
  else {
    doc.setFont('helvetica', 'bold'); doc.setFontSize(16); doc.setTextColor(...TEAL)
    doc.text('NexaCore Innovations', 22, 34)
  }
  const partner = cert.partner_name || course.partner_name
  if (assets.partner) placeImage(doc, assets.partner, W - 22 - 62, 18, 62, 28, 'right')
  else if (partner) {
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...NAVY)
    const lines = doc.splitTextToSize(partner, 70) as string[]
    doc.setFontSize(lines.length > 2 ? 9 : 11)
    doc.text(lines.slice(0, 3), W - 22, 28, { align: 'right' })
  }

  // Title
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...TEAL)
  doc.setFontSize(30)
  doc.setCharSpace(1.2)
  doc.text('CERTIFICATE OF COMPLETION', cx, 64, { align: 'center' })
  doc.setCharSpace(0)
  doc.setDrawColor(...LIME)
  doc.setLineWidth(1.2)
  doc.line(cx - 40, 69, cx + 40, 69)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  doc.setTextColor(...GREY)
  doc.text('This certificate is proudly presented to', cx, 82, { align: 'center' })

  // Learner name
  doc.setFont('times', 'bolditalic')
  doc.setTextColor(...NAVY)
  fitText(doc, cert.learner_name, W - 70, 34, 18)
  doc.text(cert.learner_name, cx, 98, { align: 'center' })
  doc.setDrawColor(...TEAL)
  doc.setLineWidth(0.4)
  doc.line(cx - 85, 102, cx + 85, 102)

  // What they completed
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  doc.setTextColor(...GREY)
  doc.text('for successfully completing the course', cx, 113, { align: 'center' })
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...NAVY)
  fitText(doc, cert.course_name, W - 70, 20, 12)
  doc.text(cert.course_name, cx, 124, { align: 'center' })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(...GREY)
  const delivered = partner
    ? `delivered by NexaCore Innovations in partnership with ${partner}`
    : 'delivered by NexaCore Innovations'
  const details: string[] = []
  if (Number(cert.hours) > 0) details.push(`${hoursText(Number(cert.hours))} of training`)
  if (course.start_date && course.end_date) details.push(`${longDate(course.start_date)} to ${longDate(course.end_date)}`)
  if (cert.attendance_pct != null) details.push(`attendance ${Math.round(Number(cert.attendance_pct))}%`)
  const line1 = doc.splitTextToSize(delivered, W - 80) as string[]
  doc.text(line1, cx, 133, { align: 'center' })
  if (details.length) doc.text(details.join('   |   '), cx, 133 + line1.length * 5.5, { align: 'center' })

  // Signatures
  const sigY = 170
  doc.setDrawColor(...NAVY)
  doc.setLineWidth(0.3)
  doc.line(34, sigY, 104, sigY)
  doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...NAVY)
  doc.text(course.signatory_name || 'Programme Lead', 69, sigY + 5, { align: 'center' })
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...GREY)
  doc.text(course.signatory_title || 'NexaCore Innovations', 69, sigY + 9.5, { align: 'center' })
  if (course.signatory_title) doc.text('NexaCore Innovations', 69, sigY + 13.5, { align: 'center' })

  doc.line(W / 2 - 30, sigY, W / 2 + 30, sigY)
  doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...NAVY)
  doc.text(longDate(cert.issued_at), W / 2, sigY + 5, { align: 'center' })
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(...GREY)
  doc.text('Date of issue', W / 2, sigY + 9.5, { align: 'center' })

  // Verification: code, link and QR code, bottom right.
  const url = verifyUrl(cert.code)
  const qr = await QRCode.toDataURL(url, { margin: 0, width: 240, color: { dark: '#1b2b4bff', light: '#ffffffff' } })
  const qrSize = 26
  const qrX = W - 22 - qrSize
  const qrY = sigY - 16
  doc.addImage(qr, 'PNG', qrX, qrY, qrSize, qrSize)
  doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(...TEAL)
  doc.text(cert.code, qrX - 4, qrY + 9, { align: 'right' })
  doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...GREY)
  doc.text('Scan or visit to verify', qrX - 4, qrY + 14, { align: 'right' })
  doc.text(url.replace(/^https?:\/\//, ''), qrX - 4, qrY + 18, { align: 'right' })

  // Honest small print.
  doc.setFontSize(7)
  doc.setTextColor(150, 150, 150)
  doc.text(
    'This certificate confirms completion of a training course delivered by NexaCore Innovations. It is not a software vendor certification.',
    cx, H - 16, { align: 'center' },
  )
}

function newDoc() {
  return new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4', compress: true })
}

/** One certificate as a PDF file download. */
export async function downloadCertificate(cert: Certificate, course: Course) {
  const doc = newDoc()
  doc.setProperties({ title: `Certificate of Completion ${cert.code}`, author: 'NexaCore Innovations', subject: cert.course_name })
  await drawPage(doc, cert, course, await loadAssets(course))
  doc.save(`${cert.code}_${cert.learner_name.replace(/[^\w]+/g, '_')}.pdf`)
}

/** Every certificate in one PDF, one per page, for printing or archiving. */
export async function downloadAllCertificates(certs: Certificate[], course: Course, filename: string) {
  if (!certs.length) return
  const doc = newDoc()
  doc.setProperties({ title: `Certificates of Completion: ${course.name}`, author: 'NexaCore Innovations' })
  const assets = await loadAssets(course)
  for (let i = 0; i < certs.length; i++) {
    if (i > 0) doc.addPage()
    await drawPage(doc, certs[i], course, assets)
  }
  doc.save(filename)
}
