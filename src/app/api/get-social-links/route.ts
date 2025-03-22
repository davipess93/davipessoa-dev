import { NextResponse } from 'next/server'

import { githubApi } from '@/lib/axios'

export async function GET() {
  try {
    const { data } = await githubApi.get('/user/social_accounts')

    return NextResponse.json({ socialLinks: data })
  } catch {
    return NextResponse.json({ message: 'Não foi possível carregar os dados' })
  }
}
