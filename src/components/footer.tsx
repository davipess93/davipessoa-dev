import Link from 'next/link'
import { HTMLAttributes } from 'react'

import { SocialIconsLinks } from './social-icons-links'

export function Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className={`flex justify-between ${className}`} {...rest}>
      <SocialIconsLinks />

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
