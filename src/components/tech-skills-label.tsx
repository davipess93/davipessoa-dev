import Image from 'next/image'

type TechSkillsLabelProps = {
  src: string
  alt: string
  label: string
}

export function TechSkillsLabel({ src, alt, label }: TechSkillsLabelProps) {
  return (
    <span className="flex items-center gap-1">
      <Image src={src} alt={alt} width={20} height={20} />
      {label}
    </span>
  )
}
