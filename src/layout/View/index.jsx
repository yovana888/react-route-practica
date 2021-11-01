import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import './style.scss'

const View = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container-main">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default View
