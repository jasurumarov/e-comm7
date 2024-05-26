import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// Images
import SiteLogo from '@/assets/icons/site-logo.svg'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import Icon1 from '@/assets/icons/footer-icon1.svg'
import Icon2 from '@/assets/icons/footer-icon2.svg'
import Icon3 from '@/assets/icons/footer-icon3.svg'
import Icon4 from '@/assets/icons/footer-icon4.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav className="footer__content">
          <div className="footer__top">
            <div>
              <Image src={SiteLogo} alt='site logo' />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
            <div>
              <h3>Follow Us</h3>
              <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
              <article><FaFacebookF />  <FaTwitter /></article>
            </div>
            <div>
              <h3>Contact Us</h3>
              <h4>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</h4>
            </div>
          </div>
          <div className="footer__nav">
            <ul>
              <h3>Infomation</h3>
              <li>About Us</li>
              <li>Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
            <ul>
              <h3>Service</h3>
              <li>About Us</li>
              <li>Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
            <ul>
              <h3>My Account</h3>
              <li>About Us</li>
              <li>Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
            <ul>
              <h3>Our Offers</h3>
              <li>About Us</li>
              <li>Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer__bottom">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div>
              <Link href={'https://www.westernunion.com'} target='_blank'>
                <Image src={Icon1} alt='payment method icon'/>
              </Link>
              <Link href={'https://www.mastercard.uz'} target='_blank'>
                <Image src={Icon2} alt='payment method icon'/>
              </Link>
              <Link href={'https://www.paypal.com'} target='_blank'>
                <Image src={Icon3} alt='payment method icon'/>
              </Link>
              <Link href={'https://cis.visa.com'} target='_blank'>
                <Image src={Icon4} alt='payment method icon'/>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer