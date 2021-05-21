import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="py-14 sm:py-20 text-center">
    <div className="space-x-5 sm:space-x-10 text-sm sm:text-xs">
      <Link activeClassName="underline" to="/">
        About
      </Link>
      <Link activeClassName="underline" to="/thoughts">
        Thoughts
      </Link>
    </div>
  </div>
)

export default Header
