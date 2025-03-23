'use client'

import {
  IconName,
  IconPrefix,
  library,
} from '@fortawesome/fontawesome-svg-core'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { websiteApi } from '@/lib/axios'

import { Skeleton } from './ui/skeleton'

type SocialLink = {
  provider: string
  url: string
}

type GetSocialLinksAPIResponse = {
  socialLinks: SocialLink[]
}

type FontAwesomeIconProps = [type: IconPrefix, icon: IconName]

export function SocialIconsLinks() {
  const domainToIconMap: Record<string, IconName> = {
    google: 'google',
    facebook: 'facebook',
    twitter: 'twitter',
    youtube: 'youtube',
    github: 'github',
    linkedin: 'linkedin',
    instagram: 'instagram',
  }

  const allBrandIcons = Object.values(brandIcons).filter(
    (icon) => typeof icon === 'object',
  )

  library.add(...allBrandIcons, faQuestion)

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])

  useEffect(() => {
    getSocialLinks()
  }, [])

  async function getSocialLinks() {
    try {
      const {
        data: { socialLinks },
      } = await websiteApi.get<GetSocialLinksAPIResponse>(
        '/api/get-social-links',
      )

      setSocialLinks(socialLinks)
    } catch (error) {
      console.log(error)
    }
  }

  function getSocialNetworkName(
    socialNetworkLink: string,
  ): FontAwesomeIconProps {
    const regex = /https?:\/\/(?:www\.)?([^/.]+)/
    const match = socialNetworkLink.match(regex)

    if (!match) return ['fas', 'question']

    const domainName = match[1]

    return ['fab', domainToIconMap[domainName]]
  }

  return (
    <div className="flex items-center gap-2">
      {socialLinks.length > 0
        ? socialLinks.map((socialLink, index) => (
            <Link
              key={`${socialLink.provider}${index}`}
              href={socialLink.url}
              target="_blank"
              className="hover:text-muted-foreground h-5"
            >
              <FontAwesomeIcon
                style={{ width: 20, height: 20 }}
                icon={getSocialNetworkName(socialLink.url)}
              />
            </Link>
          ))
        : Array.from({ length: 2 }).map((_, index) => (
            <Skeleton key={index} className="h-5 w-5 border-r-0" />
          ))}
    </div>
  )
}
