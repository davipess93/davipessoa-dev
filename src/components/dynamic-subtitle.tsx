"use client";

import { TypeAnimation } from "react-type-animation";

export function DynamicSubtitle() {
  return (
    <TypeAnimation
      sequence={["", 1000, "Transformando ideias em soluções digitais", 1000]}
      className="text-muted-foreground md:text-xl lg:text-2xl text-center lg:text-left"
      wrapper="p"
      speed={75}
      cursor={false}
    />
  );
}
