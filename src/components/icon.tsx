import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type FontAwesomeIconProps = [type: IconPrefix, icon: IconName]

type IconProps = {
  url: string
}

export function Icon({ url }: IconProps) {
  const domainToIconMap: Record<string, IconName> = {
    google: 'google',
    facebook: 'facebook',
    twitter: 'twitter',
    youtube: 'youtube',
    github: 'github',
    linkedin: 'linkedin',
    instagram: 'instagram',
  }

  function getSocialNetworkName(
    socialNetworkLink: string,
  ): FontAwesomeIconProps {
    const regex = /https?:\/\/(?:www\.)?([^/.]+)/
    const match = socialNetworkLink.match(regex)

    if (!match) return ['fas', 'question']

    const domainName = match[1]

    return ['fab', domainToIconMap[domainName]]
  }

  return (
    <FontAwesomeIcon
      style={{ width: 20, height: 20 }}
      icon={getSocialNetworkName(url)}
    />
  )
}
