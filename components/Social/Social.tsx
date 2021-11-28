interface Social {
  href: string
  name: string
}

export const socials: Array<Social> = [
  {
    href: 'mailto:tomas.eglinskas@gmail.com',
    name: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/tomas-eglinskas',
    name: 'Linkedin',
  },
  {
    href: 'https://github.com/adtm',
    name: 'Github',
  },
  {
    href: 'https://twitter.com/tomas_eglinskas',
    name: 'Twitter',
  },
]

interface SocialIconsProps {
  socials: Array<Social>
}

const SocialIcons = ({ socials }: SocialIconsProps) => (
  <>
    {socials.map((social) => (
      <a key={social.name} href={social.href} className="hover:underline">
        {social.name}
      </a>
    ))}
  </>
)

export default SocialIcons
