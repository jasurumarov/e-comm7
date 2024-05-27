import ContactForm from '@/components/contactForm/ContactForm'
import InnerNavbar from '@/components/innerNavbar/InnerNavbar'
import React from 'react'

const Contact = () => {
  return (
    <main className='contact-page'>
        <InnerNavbar outerPage={<></>} activePage={"Contact Us"}/>
        <ContactForm/>
    </main>
  )
}

export default Contact