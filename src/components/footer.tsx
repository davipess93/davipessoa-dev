import { HTMLAttributes } from 'react'

import { SendToWhatsApp } from './send-to-whatsapp'
import { SocialIconsLinks } from './social-icons-links'

export function Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className={`flex justify-between ${className}`} {...rest}>
      <SocialIconsLinks />

      <SendToWhatsApp
        phoneNumber="5586998164238"
        defaultMessage="Oi, Davi! Vi seu portfólio e curti bastante! Bora conversar?"
      >
        Vamos trabalhar juntos?
      </SendToWhatsApp>
    </footer>
  )
}
