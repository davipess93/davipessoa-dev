import './globals.css'

import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { inter } from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'Davi Pessoa - Desenvolvedor',
  description:
    'Desenvolvedor full stack criando soluções web e mobile eficientes. Confira meu portfólio!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
