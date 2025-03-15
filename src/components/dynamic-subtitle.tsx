'use client'

import { TypeAnimation } from 'react-type-animation'

export function DynamicSubtitle() {
  return (
    <TypeAnimation
      sequence={['', 1000, 'Transformando ideias em soluções digitais', 1000]}
      className="text-muted-foreground text-center md:text-xl lg:text-left lg:text-2xl"
      wrapper="h2"
      speed={75}
      cursor={false}
    />
  )
}
