'use client'

import * as React from 'react'

import { websiteApi } from '@/lib/axios'

import { ThemeToggle } from './theme/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Skeleton } from './ui/skeleton'

type GithubUser = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string | null
  email: string | null
  hireable: string | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

type GetUserAPIResponse = {
  githubUser: GithubUser
}

export function Header({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  const [user, setUser] = React.useState<GithubUser>()

  React.useEffect(() => {
    getNameFromGithubApi()
  }, [])

  async function getNameFromGithubApi() {
    try {
      const {
        data: { githubUser },
      } = await websiteApi.get<GetUserAPIResponse>('/api/get-user')

      setUser(githubUser)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`flex justify-between ${className}`} {...rest}>
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <Avatar>
              <AvatarImage src={user.avatar_url} />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
            <span>Oi, eu sou {user.name}👋</span>
          </>
        ) : (
          <>
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-[250px]" />
          </>
        )}
      </div>
      <ThemeToggle />
    </div>
  )
}
