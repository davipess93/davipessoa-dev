'use client'

import { TypeAnimation } from 'react-type-animation'

import { jetBrainsMono } from '@/utils/fonts'

export function DynamicTitle() {
  return (
    <TypeAnimation
      sequence={['DESENVOLVEDOR\nWEB💻', 2000, 'DESENVOLVEDOR\nMOBILE📱', 2000]}
      className={`mb-2 whitespace-pre-line text-center text-[40px]/[2.25rem] font-extrabold sm:text-6xl lg:text-left xl:text-7xl 2xl:text-[88px] ${jetBrainsMono.className}`}
      wrapper="h1"
      speed={50}
      repeat={Infinity}
    />
  )
}
