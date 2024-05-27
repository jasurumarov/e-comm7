import Link from 'next/link'
import React from 'react'

const InnerNavbar = ({outerPage, activePage}) => {
  return (
    <nav className='innerNavbar'>
        <div className="container">
            <div className="innerNavbar__content">
                <Link href={"/"}>Home</Link>
                <span>/</span>
                <p className='innerNavbar__link'>{outerPage}</p>
                <span>/</span>
                <p>{activePage}</p>
            </div>
        </div>
    </nav>
  )
}

export default InnerNavbar