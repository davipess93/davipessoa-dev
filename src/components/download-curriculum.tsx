'use client'

import { CloudDownload, Loader2 } from 'lucide-react'
import { useState } from 'react'

import { websiteApi } from '@/lib/axios'

import { Button } from './ui/button'

export function DownloadCurriculum() {
  const [isDownloading, setIsDownloading] = useState(false)

  async function download() {
    setIsDownloading(true)
    try {
      const { data, headers } = await websiteApi.get('/api/get-curriculum', {
        responseType: 'blob',
      })

      const fileName = decodeURIComponent(
        headers['x-file-name'] || 'currículo.pdf',
      )

      const url = window.URL.createObjectURL(
        new Blob([data], { type: 'application/pdf' }),
      )
      const link = document.createElement('a')

      link.href = url
      link.download = fileName

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.log(error)
    }
    setIsDownloading(false)
  }

  return (
    <Button variant="ghost" onClick={download} disabled={isDownloading}>
      {isDownloading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <CloudDownload className="h-5 w-5" />
      )}

      {isDownloading ? (
        <span>Salvando currículo</span>
      ) : (
        <span>Salvar currículo</span>
      )}
    </Button>
  )
}
