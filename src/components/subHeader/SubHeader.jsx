'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Icons
import SiteLogo from '@/assets/icons/site-logo.svg'
import { IoMenu } from "react-icons/io5";

const SubHeader = () => {
  const [menu, setMenu] = useState(false)
  const [shrink, setShrink] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true)
      } else {
        setShrink(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`subHeader ${shrink ? 'shrink' : ''}`}>
      <div className="container">
        <nav className="subHeader__content">
          <Link href={"/"}>
            <Image src={SiteLogo} alt='site logo' width={134} height={44} />
          </Link>
          <div className={`subHeader__links ${menu ? 'show' : ''} ${shrink ? 'shrink' : ''}`}>
            <Link href={"/"}>HOME</Link>
            <Link href={"/bags"}>BAGS</Link>
            <Link href={"/sneakers"}>SNEAKERS</Link>
            <Link href={"/belt"}>BELT</Link>
            <Link href={"/contact"}>CONTACT</Link>
          </div>
          <button onClick={() => setMenu(!menu)} className='menu-btn'><IoMenu /></button>
        </nav>
      </div>
    </header>
  )
}

export default SubHeader