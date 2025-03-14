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
      className="text-4xl font-extrabold text-center sm:text-5xl xl:text-7xl lg:text-left whitespace-pre-line md:mb-4 xl:h-[144px] h-[96px]"
      wrapper="h1"
      speed={50}
      repeat={Infinity}
    />
  )
}
