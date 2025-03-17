import { DynamicSubtitle } from '@/components/dynamic-subtitle'
import { DynamicTitle } from '@/components/dynamic-title'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Page() {
  return (
    <div className="m-auto flex min-h-screen max-w-[1600px] flex-col justify-between p-6">
      <div>
        <Header />

        <div className="my-8 grid grid-cols-1 lg:grid-cols-2">
          <main className="mb-8 h-[96px] sm:h-[144px] lg:h-[176px]">
            <DynamicTitle />
            <DynamicSubtitle />
          </main>
          <aside>
            <h3 className="mb-4 text-2xl font-semibold">Meu Currículo / CV</h3>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="about-me">
                  <AccordionTrigger className="text-lg font-medium">
                    Sobre mim
                  </AccordionTrigger>
                  <AccordionContent>
                    Sou um desenvolvedor web full stack que gosta de inovar em
                    cada projeto, explorando novas funcionalidades e integrando
                    ferramentas de terceiros para otimizar o desenvolvimento.
                    Minha missão é criar soluções eficientes e impactantes,
                    sempre focado em entregar aplicações de alta qualidade.
                    Estou constantemente em busca de aprendizado e
                    aprimoramento, garantindo que cada projeto não apenas
                    atenda, mas supere as necessidades e expectativas de quem
                    confia no meu trabalho.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="career">
                  <AccordionTrigger className="text-lg font-medium">
                    Carreira
                  </AccordionTrigger>
                  <AccordionContent>
                    Sou um desenvolvedor web full stack que gosta de inovar em
                    cada projeto, explorando novas funcionalidades e integrando
                    ferramentas de terceiros para otimizar o desenvolvimento.
                    Minha missão é criar soluções eficientes e impactantes,
                    sempre focado em entregar aplicações de alta qualidade.
                    Estou constantemente em busca de aprendizado e
                    aprimoramento, garantindo que cada projeto não apenas
                    atenda, mas supere as necessidades e expectativas de quem
                    confia no meu trabalho.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tec-skills">
                  <AccordionTrigger className="text-lg font-medium">
                    Tecnologias
                  </AccordionTrigger>
                  <AccordionContent>
                    Sou um desenvolvedor web full stack que gosta de inovar em
                    cada projeto, explorando novas funcionalidades e integrando
                    ferramentas de terceiros para otimizar o desenvolvimento.
                    Minha missão é criar soluções eficientes e impactantes,
                    sempre focado em entregar aplicações de alta qualidade.
                    Estou constantemente em busca de aprendizado e
                    aprimoramento, garantindo que cada projeto não apenas
                    atenda, mas supere as necessidades e expectativas de quem
                    confia no meu trabalho.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="portfolio">
                  <AccordionTrigger className="text-lg font-medium">
                    Portfólio
                  </AccordionTrigger>
                  <AccordionContent>
                    Sou um desenvolvedor web full stack que gosta de inovar em
                    cada projeto, explorando novas funcionalidades e integrando
                    ferramentas de terceiros para otimizar o desenvolvimento.
                    Minha missão é criar soluções eficientes e impactantes,
                    sempre focado em entregar aplicações de alta qualidade.
                    Estou constantemente em busca de aprendizado e
                    aprimoramento, garantindo que cada projeto não apenas
                    atenda, mas supere as necessidades e expectativas de quem
                    confia no meu trabalho.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* <div>
                <h4 className="text-xl font-medium">Sobre mim</h4>
                <p className="font-light">
                  Sou um desenvolvedor web full stack que gosta de inovar em
                  cada projeto, explorando novas funcionalidades e integrando
                  ferramentas de terceiros para otimizar o desenvolvimento.
                  Minha missão é criar soluções eficientes e impactantes, sempre
                  focado em entregar aplicações de alta qualidade. Estou
                  constantemente em busca de aprendizado e aprimoramento,
                  garantindo que cada projeto não apenas atenda, mas supere as
                  necessidades e expectativas de quem confia no meu trabalho.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium">Carreira</h4>
                <p className="font-light">
                  Sou um desenvolvedor web full stack que gosta de inovar em
                  cada projeto, explorando novas funcionalidades e integrando
                  ferramentas de terceiros para otimizar o desenvolvimento.
                  Minha missão é criar soluções eficientes e impactantes, sempre
                  focado em entregar aplicações de alta qualidade. Estou
                  constantemente em busca de aprendizado e aprimoramento,
                  garantindo que cada projeto não apenas atenda, mas supere as
                  necessidades e expectativas de quem confia no meu trabalho.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Tecnologias</h4>
                <p className="font-light">
                  Sou um desenvolvedor web full stack que gosta de inovar em
                  cada projeto, explorando novas funcionalidades e integrando
                  ferramentas de terceiros para otimizar o desenvolvimento.
                  Minha missão é criar soluções eficientes e impactantes, sempre
                  focado em entregar aplicações de alta qualidade. Estou
                  constantemente em busca de aprendizado e aprimoramento,
                  garantindo que cada projeto não apenas atenda, mas supere as
                  necessidades e expectativas de quem confia no meu trabalho.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Portfólio</h4>
                <p className="font-light">
                  Sou um desenvolvedor web full stack que gosta de inovar em
                  cada projeto, explorando novas funcionalidades e integrando
                  ferramentas de terceiros para otimizar o desenvolvimento.
                  Minha missão é criar soluções eficientes e impactantes, sempre
                  focado em entregar aplicações de alta qualidade. Estou
                  constantemente em busca de aprendizado e aprimoramento,
                  garantindo que cada projeto não apenas atenda, mas supere as
                  necessidades e expectativas de quem confia no meu trabalho.
                </p>
              </div> */}
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
