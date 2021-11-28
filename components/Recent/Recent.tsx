interface RecentWork {
  name: string
  year: string
  href: string
}

export const recentWorks: Array<RecentWork> = [
  {
    name: '@Uber',
    year: '2021 -',
    href: 'https://www.uber.com/',
  },
  {
    name: '@Wix',
    year: '2019 - 2021',
    href: 'https://www.wix.com/',
  },
]

interface RecentWorksProps {
  works: Array<RecentWork>
}

const RecentWorks = ({ works }: RecentWorksProps) => (
  <>
    {works.map((recent) => (
      <p key={recent.name}>
        <a href={recent.href} className="font-medium hover:underline">
          {recent.name}
        </a>
        , <span className="text-xs italic">{recent.year}</span>
      </p>
    ))}
  </>
)

export default RecentWorks
