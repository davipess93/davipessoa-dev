import { NextResponse } from 'next/server'

import { githubApi } from '@/lib/axios'
import { scrapReadme } from '@/utils/scrap-readme'

type LinksGithubRepos = {
  self: string
  git: string
  html: string
}

type GetAPIGithubRepos = {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  content: string
  encoding: string
  _links: LinksGithubRepos
}

export async function GET() {
  try {
    const {
      data: { content },
    } = await githubApi.get<GetAPIGithubRepos>(
      '/repos/davipess93/davipess93/readme',
    )

    const decodedReadme = Buffer.from(content, 'base64').toString('utf-8')

    const dataScrapped = scrapReadme(decodedReadme)

    return NextResponse.json({ dataScrapped })
  } catch {
    return NextResponse.json({ message: 'Não foi possível carregar os dados' })
  }
}
