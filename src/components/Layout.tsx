import React from 'react'
import Header from './Header'

const Container = ({ children }) => (
  <div className="w-full sm:w-2/3 lg:w-1/3 m-auto px-8">
    <Header />
    <div className="">{children}</div>
  </div>
)

export default Container
