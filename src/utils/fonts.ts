import { Inter, JetBrains_Mono as JetBrainsMono } from 'next/font/google'

const jetBrainsMono = JetBrainsMono({
  weight: ['400', '800'],
  subsets: ['latin'],
})

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})

export { jetBrainsMono, inter }
