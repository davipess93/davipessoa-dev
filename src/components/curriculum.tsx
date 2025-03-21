import Image from 'next/image'

import { TechSkillsLabel } from '@/components/tech-skills-label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { techSkills } from '@/utils/tech-skills'

export function Curriculum() {
  return (
    <>
      <h3 className="text-xl font-semibold sm:text-2xl">Meu Currículo / CV</h3>
      <div>
        <Accordion type="single" defaultValue="about-me" collapsible>
          <AccordionItem value="about-me">
            <AccordionTrigger className="text-md font-medium sm:text-lg">
              Sobre mim
            </AccordionTrigger>
            <AccordionContent className="animate-once">
              Sou um desenvolvedor web full stack que gosta de inovar em cada
              projeto, explorando novas funcionalidades e integrações de
              ferramentas para otimizar o desenvolvimento. Minha missão é criar
              aplicações eficientes, impactantes e de alta qualidade. Estou
              constantemente em busca de aprendizado e aprimoramento, garantindo
              que cada projeto não apenas atenda, mas supere as necessidades e
              expectativas de quem confia no meu trabalho.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="career">
            <AccordionTrigger className="text-md font-medium sm:text-lg">
              Carreira
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>

          <AccordionItem value="tec-skills">
            <AccordionTrigger className="text-md font-medium sm:text-lg">
              Tecnologias
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-4">
              {techSkills.map(({ src, alt, name }, index) => (
                <TechSkillsLabel src={src} alt={alt} label={name} key={index} />
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="portfolio">
            <AccordionTrigger className="text-md font-medium sm:text-lg">
              Portfólio
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-center gap-4 md:items-start">
              <Image
                src="/assets/design-components.svg"
                alt="building portfolio"
                width={300}
                height={300}
                className="dark:invert"
              />
              <span className="text-muted-foreground">Em construção...</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
