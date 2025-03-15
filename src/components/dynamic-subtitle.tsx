'use client'

import { TypeAnimation } from 'react-type-animation'

import { jetBrainsMono } from '@/utils/fonts'

export function DynamicSubtitle() {
  return (
    <TypeAnimation
      sequence={['', 1000, 'Transformando ideias em soluções digitais', 1000]}
      className={`text-muted-foreground text-center text-xs md:text-lg lg:text-left lg:text-xl ${jetBrainsMono.className}`}
      wrapper="h2"
      speed={75}
      cursor={false}
    />
  )
}
