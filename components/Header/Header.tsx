import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Route {
  href: string
  name: string
  active: boolean
}

const routes: Array<Route> = [
  {
    href: '/',
    name: 'About',
    active: true,
  },
  {
    href: '/thoughts',
    name: 'Thoughts',
    active: true,
  },
  {
    href: '/tech',
    name: 'Tech',
    active: false,
  },
]

const Header = () => {
  const router = useRouter()
  const isActiveRoute = (routePath: string) => router.asPath == routePath

  return (
    <div className="py-14 sm:py-20 text-center">
      <div className="space-x-5 sm:space-x-10 text-sm sm:text-xs">
        {routes.map((route) => {
          if (route.active) {
            return (
              <div
                key={route.name}
                className={`inline hover:underline ${
                  isActiveRoute(route.href) ? 'underline' : ''
                }`}
              >
                <Link href={route.href}>{route.name}</Link>
              </div>
            )
          } else {
            return (
              <div key={route.name} className="inline line-through cursor-not-allowed">
                {route.name}
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Header
