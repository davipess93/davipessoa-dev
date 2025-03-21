import axios from 'axios'
import { NextResponse } from 'next/server'

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
    } = await axios.get<GetAPIGithubRepos>(
      'https://api.github.com/repos/davipess93/davipess93/readme',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_KEY}`,
        },
      },
    )

    const decodedReadme = Buffer.from(content, 'base64').toString('utf-8')

    const dataScrapped = scrapReadme(decodedReadme)

    return NextResponse.json({ dataScrapped })
  } catch (error) {
    return NextResponse.json({ message: 'Não foi possível carregar os dados' })
  }
}
