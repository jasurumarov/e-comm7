import Image from 'next/image'
import React from 'react'

// Images
import BestProductImg from '@/assets/images/bestproductimg.png'

const BestProduct = () => {
    return (
        <section className='bestProduct-section'>
            <div className="container">
                <div className="bestProduct-section__content">
                    <div>
                        <h3>Adidas Men Running Sneakers</h3>
                        <p>Performance and design. Taken right to the edge.</p>
                        <button>SHOP NOW</button>
                    </div>
                    <Image src={BestProductImg} alt='product img' width={0} height={0}/>
                </div>
            </div>
        </section>
    )
}

export default BestProduct