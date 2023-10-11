import React from 'react'
import Header from './Header'
import Footer from './Footer'

function ContentPage({children}) {
  return (
    <>
        <Header/>
            <div className="content">{children}</div>
        <Footer/>


    </>
  )
}

export default ContentPage