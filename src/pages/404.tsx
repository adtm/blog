import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <div className="text-center">
      <div className="m-auto mb-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-10 w-10 rounded-full" />
      <p className="text-sm">This page doesn&#39;t exist</p>
      <Link to="/">
        <button className="text-white text-sm bg-black py-2 px-5 rounded-md m-3">
          Go home
        </button>
      </Link>
    </div>
  </>
)

export default NotFoundPage
