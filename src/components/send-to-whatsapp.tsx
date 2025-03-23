import Link from 'next/link'
import { ReactNode } from 'react'

type SendToWhatsAppProps = {
  children: ReactNode
  defaultMessage?: string
  phoneNumber: string
}

export function SendToWhatsApp({
  children,
  defaultMessage,
  phoneNumber,
}: SendToWhatsAppProps) {
  function handleDefaultMessage(message?: string) {
    if (message) {
      return message.replace(' ', '%20')
    }

    return 'Olá, tudo bem?'.replace(' ', '%20')
  }

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${handleDefaultMessage(defaultMessage)}`}
      target="_blank"
      className="hover:text-muted-foreground underline"
    >
      {children}
    </Link>
  )
}
