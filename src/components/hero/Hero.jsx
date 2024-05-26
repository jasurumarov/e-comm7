import Image from 'next/image'
import React from 'react'

// Images
import HeroBg from '@/assets/images/herobg.png'

const Hero = () => {
    return (
        <section className='hero-section'>
            <Image src={HeroBg} alt='hero background image'/>
            <div className="container">
                <div className="hero-section__content">
                    <h1>Super Flash Sale 50% Off</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero