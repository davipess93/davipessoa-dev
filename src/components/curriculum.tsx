'use client'

import { CloudDownload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { websiteApi } from '@/lib/axios'

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
  careers: Career[]
  techSkills: TechSkill[]
}

type GetProfileDataAPIResponse = {
  dataScrapped: DataScrapped
}

export function Curriculum() {
  const [hasLoadedDataProfile, setHasLoadedDataProfile] = useState(false)
  const [about, setAbout] = useState<string>()
  const [techSkills, setTechSkills] = useState<TechSkill[]>([])
  const [careers, setCareers] = useState<Career[]>([])

  useEffect(() => {
    getProfileData()
  }, [])

  async function getProfileData() {
    setHasLoadedDataProfile(false)
    try {
      const {
        data: { dataScrapped },
      } = await websiteApi.get<GetProfileDataAPIResponse>(
        '/api/get-profile-data',
      )

      setAbout(dataScrapped.about)
      setTechSkills(dataScrapped.techSkills)
      setCareers(dataScrapped.careers)

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
            <AccordionContent className="flex flex-col-reverse justify-between gap-4 md:flex-row">
              <div className="space-y-4">
                {hasLoadedDataProfile
                  ? careers.map((career, i) => (
                      <div key={i}>
                        <span className="text-xl font-medium">
                          {career.company}
                        </span>
                        <div className="flex flex-col">
                          {career.positions.map((position, j) => (
                            <span
                              className="text-muted-foreground"
                              key={`${i}${j}`}
                            >
                              <span className="font-semibold">
                                {position.title}
                              </span>{' '}
                              /{' '}
                              <span className="font-light">
                                {position.period}
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))
                  : Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="w-78 h-4" />
                        <Skeleton className="w-58 h-4" />
                      </div>
                    ))}
              </div>
              <div>
                <Link
                  href="/api/get-curriculum"
                  target="_blank"
                  className="hover:text-muted-foreground flex gap-1"
                >
                  <CloudDownload className="h-5 w-5" />
                  <span>Baixar currículo</span>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tec-skills">
            <AccordionTrigger className="text-md font-medium sm:text-lg">
              Tecnologias
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-1">
              {hasLoadedDataProfile ? (
                techSkills.map(({ src, alt }, index) => (
                  <img src={src} alt={alt} key={index} />
                ))
              ) : (
                <>
                  <Skeleton className="h-8 w-24 rounded-none" />
                  <Skeleton className="h-8 w-28 rounded-none" />
                  <Skeleton className="w-26 h-8 rounded-none" />
                  <Skeleton className="h-8 w-32 rounded-none" />
                  <Skeleton className="h-8 w-28 rounded-none" />
                  <Skeleton className="w-26 h-8 rounded-none" />
                  <Skeleton className="w-26 h-8 rounded-none" />
                  <Skeleton className="w-30 h-8 rounded-none" />
                  <Skeleton className="w-26 h-8 rounded-none" />
                  <Skeleton className="h-8 w-32 rounded-none" />
                </>
              )}
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
