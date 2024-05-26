import Image from 'next/image'
import React from 'react'

// Images
import ProductImg3 from '@/assets/images/hero-product-img1.png'
import ProductImg2 from '@/assets/images/hero-product-img2.png'
import ProductImg1 from '@/assets/images/hero-product-img3.png'

const HeroProducts = () => {
  return (
    <section className='heroProducts-section'>
      <div className="container">
        <div className="heroProducts-section__content">
          <div>
            <h3>FS - QUILTED MAXI CROSS BAG</h3>
            <Image src={ProductImg1} alt='product image'/>
            <p>$534,33 <span>24% Off</span></p>
            <h2>$299,43</h2>
          </div>
          <div>
            <h3>FS - Nike Air Max 270 React...</h3>
            <Image src={ProductImg2} alt='product image'/>
            <p>$534,33 <span>24% Off</span></p>
            <h2>$299,43</h2>
          </div>
          <div>
            <h3>FS - Nike Air Max 270 React...</h3>
            <Image src={ProductImg1} alt='product image'/>
            <p>$534,33 <span>24% Off</span></p>
            <h2>$299,43</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroProducts