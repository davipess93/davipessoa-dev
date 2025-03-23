'use client'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { HTMLAttributes, useEffect, useState } from 'react'

import { websiteApi } from '@/lib/axios'

import { Icon } from './icon'

export type SocialLink = {
  provider: string
  url: string
}

type GetSocialLinksAPIResponse = {
  socialLinks: SocialLink[]
}

export function Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
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

  return (
    <footer className={`flex justify-between ${className}`} {...rest}>
      <div className="flex items-center gap-2">
        {socialLinks.map((socialLink, index) => (
          <Link
            key={`${socialLink.provider}${index}`}
            href={socialLink.url}
            target="_blank"
            className="hover:text-muted-foreground h-5"
          >
            <Icon url={socialLink.url} />
          </Link>
        ))}
      </div>

      <Link
        href="https://wa.me/5586998164238?text=Oi,%20Davi!%20Vi%20seu%20portfólio%20e%20curti%20bastante!%20Bora%20conversar?"
        target="_blank"
        className="hover:text-muted-foreground underline"
      >
        Vamos trabalhar juntos?
      </Link>
    </footer>
  )
}
