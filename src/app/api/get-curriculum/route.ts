import { GoogleAuth } from 'google-auth-library'
import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const decodedCredentials = Buffer.from(
      process.env.GOOGLE_CREDENTIALS_BASE64,
      'base64',
    ).toString('utf-8')

    const credentials = JSON.parse(decodedCredentials)

    const auth = new GoogleAuth({
      credentials,
      scopes: 'https://www.googleapis.com/auth/drive',
    })

    const service = google.drive({ version: 'v3', auth })

    const fileId = process.env.GOOGLE_DOC_ID
    const fileName = process.env.GOOGLE_DOC_NAME

    const { data } = await service.files.export(
      {
        fileId,
        mimeType: 'application/pdf',
      },
      { responseType: 'stream' },
    )

    const fileChunks: Buffer[] = []
    await new Promise((resolve, reject) => {
      data
        .on('data', (chunk) => fileChunks.push(chunk))
        .on('end', () => resolve(null))
        .on('error', reject)
    })

    const pdfBuffer = Buffer.concat(fileChunks)

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}`,
      },
    })
  } catch (error) {
    console.error('❌ Erro ao exportar arquivo:', error)
    return new NextResponse('Erro ao baixar o documento', { status: 500 })
  }
}
