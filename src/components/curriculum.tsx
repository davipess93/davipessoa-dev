'use client'

import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { TechSkillsLabel } from '@/components/tech-skills-label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { techSkills } from '@/utils/tech-skills'

import { Skeleton } from './ui/skeleton'

type TechSkill = {
  name: string
  src: string
  alt: string
}

type Position = {
  title: string
  period: string
}

type Career = {
  company: string
  positions: Position[]
}

type DataScrapped = {
  about: string
  career: Career[]
  techSkills: TechSkill[]
}

type GetProfileDataAPIResponse = {
  dataScrapped: DataScrapped
}

export function Curriculum() {
  const [hasLoadedDataProfile, setHasLoadedDataProfile] = useState(false)
  const [about, setAbout] = useState<string>()

  useEffect(() => {
    getProfileData()
  }, [])

  async function getProfileData() {
    setHasLoadedDataProfile(false)
    try {
      const {
        data: { dataScrapped },
      } = await axios.get<GetProfileDataAPIResponse>(
        'http://localhost:3000/api/get-profile-data',
      )

      setAbout(dataScrapped.about)

      setHasLoadedDataProfile(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h3 className="text-xl font-semibold sm:text-2xl">Meu Currículo / CV</h3>
      <div>
        <Accordion type="single" defaultValue="about-me" collapsible>
          <AccordionItem value="about-me">
            <AccordionTrigger className="text-md font-medium sm:text-lg">
              Sobre mim
            </AccordionTrigger>
            <AccordionContent>
              {hasLoadedDataProfile ? (
                <p>{about}</p>
              ) : (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-[650px]" />
                  <Skeleton className="h-4 w-[700px]" />
                  <Skeleton className="h-4 w-[700px]" />
                  <Skeleton className="h-4 w-[350px]" />
                </div>
              )}
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
