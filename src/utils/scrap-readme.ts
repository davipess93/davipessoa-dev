export function scrapReadme(markdown: string) {
  // Função para remover emojis e caracteres desnecessários
  const removeEmoji = (text: string) => text.replace(/[^\w\s]/g, '').trim()

  // Separar o conteúdo em seções com base no título "##"
  const sections = markdown.split('## ')

  // Buscar e extrair a seção "Sobre mim"
  const aboutMe =
    sections
      .find((sec) => removeEmoji(sec).startsWith('Sobre mim'))
      ?.split('\n')
      .slice(1)
      .join(' ')
      .trim() || ''

  // Buscar a seção de Carreira e processar as empresas e cargos
  const careerSection =
    sections.find((sec) => removeEmoji(sec).startsWith('Carreira')) || ''
  const career: {
    company: { name: string; roles: { name: string; period: string }[] }
  }[] = []

  console.log({ sections })

  // Separar a seção de Carreira em linhas e processá-las
  const careerLines = careerSection
    .split('\n')
    .filter((line) => line.trim() !== '' && !line.trim().startsWith('#')) // Ignora linhas que começam com #

  let currentCompany = ''
  let currentRoles: { name: string; period: string }[] = []

  careerLines.forEach((line) => {
    const companyMatch = line.match(/###\s*([\w\s]+)/) // Captura o nome da empresa, sem emojis
    const roleMatch = line.match(/- \*\*([\w\s]+)\*\* \/ (.+)/) // Captura o cargo e o período

    if (companyMatch) {
      // Se encontrar uma nova empresa, armazena a empresa anterior
      if (currentCompany) {
        career.push({ company: { name: currentCompany, roles: currentRoles } })
      }
      currentCompany = companyMatch[1].trim() // Atualiza o nome da empresa
      currentRoles = [] // Reseta os cargos para a nova empresa
    } else if (roleMatch) {
      // Se encontrar um cargo, adiciona ao array de cargos
      currentRoles.push({
        name: roleMatch[1].trim(),
        period: roleMatch[2].trim(),
      })
    }
  })

  // Adiciona a última empresa e cargos
  if (currentCompany) {
    career.push({ company: { name: currentCompany, roles: currentRoles } })
  }

  // Buscar e extrair a seção de Tecnologias
  const technologiesSection =
    sections.find((sec) => removeEmoji(sec).startsWith('Tecnologias')) || ''
  const technologyMatches = [
    ...technologiesSection.matchAll(/!\[([^\]]+)\]\(([^)]+)\)/g),
  ]

  // Extrair as tecnologias como objetos com label, url e alt
  const techSkills = technologyMatches.map((match) => ({
    label: match[1],
    url: match[2],
    alt: match[1].toLowerCase().replace(/[\s.]/g, '_'),
  }))

  // Retornar os dados extraídos
  return { aboutMe, career, techSkills }
}
