'use client'

import { TypeAnimation } from 'react-type-animation'

export function DynamicTitle() {
  return (
    <TypeAnimation
      sequence={[
        'DESENVOLVEDOR\nWEB 💻',
        2000,
        'DESENVOLVEDOR\nMOBILE 📱',
        2000,
      ]}
      className="h-[96px] whitespace-pre-line text-center text-4xl font-extrabold sm:text-5xl md:mb-4 lg:text-left xl:h-[144px] xl:text-7xl"
      wrapper="h1"
      speed={50}
      repeat={Infinity}
    />
  )
}
