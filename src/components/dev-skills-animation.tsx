'use client'

import { TypeAnimation } from "react-type-animation";

export function DevSkillsAnimation() {
  return (
    <TypeAnimation
      sequence={[
        `DESENVOLVEDOR\nWEB 💻`,
        2000,
        `DESENVOLVEDOR\nMOBILE 📱`,
        2000,
      ]}
      className="text-4xl font-extrabold text-center md:text-7xl md:text-left whitespace-pre-line"
      wrapper="h1"
      speed={30}
      repeat={Infinity}
    />
  )
}