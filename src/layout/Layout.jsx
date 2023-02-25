import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

function Layout({Children}) {
  return (
    <div className='bg-light'>
        <Navigation/>
        {Children}
        <Footer/>
    </div>
  )
}

export default Layout