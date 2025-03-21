type Career = {
  company: string
  positions: { title: string; period: string }[]
}

type ScrappedReadme = {
  about: string
  career: Career[]
  techSkills: { name: string; src: string; alt: string }[]
}

export function scrapReadme(readme: string) {
  const lines = readme.split('\n')
  const scrappedReadme: ScrappedReadme = {
    about: '',
    career: [],
    techSkills: [],
  }

  let currentCompany: {
    company: string
    positions: { title: string; period: string }[]
  } | null = null
  let isAboutSection = false

  for (let line of lines) {
    line = line.trim()

    // Capturar "Sobre mim"
    if (line.startsWith('## Sobre mim')) {
      isAboutSection = true
      continue
    }
    if (line.startsWith('##') && !line.startsWith('## Sobre mim')) {
      isAboutSection = false
    }
    if (isAboutSection && line) {
      scrappedReadme.about += line + ' '
      continue
    }

    if (line.startsWith('- ') && !line.includes('**')) {
      currentCompany = {
        company: line.replace('- ', '').trim(),
        positions: [],
      }
      scrappedReadme.career.push(currentCompany)
    } else if (line.startsWith('- ') && line.includes('**') && currentCompany) {
      const [position, period] = line
        .replace('- ', '')
        .replace(/\*\*/g, '')
        .split(' / ')
      if (position) {
        currentCompany.positions.push({
          title: position.trim(),
          period: period ? period.trim() : '',
        })
      }
    }

    const badgeRegex = /!\[([^\]]+)\]\(([^)]+)\)/g
    let match
    while ((match = badgeRegex.exec(line)) !== null) {
      const name = match[1]
      const src = match[2]
      const alt = name.replace(/\./g, '_').toLowerCase()
      scrappedReadme.techSkills.push({ name, src, alt })
    }
  }

  scrappedReadme.about = scrappedReadme.about.trim()

  return scrappedReadme
}
