import { DynamicSubtitle } from '@/components/dynamic-subtitle'
import { DynamicTitle } from '@/components/dynamic-title'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { TechSkillsLabel } from '@/components/tech-skills-label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { techSkills } from '@/utils/tech-skills'

export default function Page() {
  return (
    <div className="m-auto flex min-h-screen max-w-[1600px] flex-col justify-between p-6">
      <div>
        <Header className="animate-fade" />

        <div className="my-8 grid grid-cols-1 lg:grid-cols-2">
          <main className="mb-6 h-[96px] sm:h-[144px] lg:h-[176px]">
            <DynamicTitle />
            <DynamicSubtitle />
          </main>
          <aside className="animate-fade-up">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Meu Currículo / CV
            </h3>
            <div>
              <Accordion type="single" defaultValue="about-me" collapsible>
                <AccordionItem value="about-me">
                  <AccordionTrigger className="text-md font-medium sm:text-lg">
                    Sobre mim
                  </AccordionTrigger>
                  <AccordionContent className="animate-once">
                    Sou um desenvolvedor web full stack que gosta de inovar em
                    cada projeto, explorando novas funcionalidades e integrações
                    de ferramentas para otimizar o desenvolvimento. Minha missão
                    é criar aplicações eficientes, impactantes e de alta
                    qualidade. Estou constantemente em busca de aprendizado e
                    aprimoramento, garantindo que cada projeto não apenas
                    atenda, mas supere as necessidades e expectativas de quem
                    confia no meu trabalho.
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
                      <TechSkillsLabel
                        src={src}
                        alt={alt}
                        label={name}
                        key={index}
                      />
                    ))}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="portfolio">
                  <AccordionTrigger className="text-md font-medium sm:text-lg">
                    Portfólio
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </aside>
        </div>
      </div>

      <Footer className="animate-fade" />
    </div>
  )
}
