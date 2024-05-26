import Image from 'next/image'
import React from 'react'

// Images
import NewsImg1 from '@/assets/icons/NewsImg1.svg'
import NewsImg3 from '@/assets/icons/NewsImg2.svg'
import NewsImg2 from '@/assets/icons/NewsImg3.svg'

const News = () => {
    return (
        <section className='news-section'>
            <div className="container">
                <div className="news-section__content">
                    <h2>LATEST NEWS</h2>
                    <div className="news__cards">
                        <div className="news__card card1">
                            <Image src={NewsImg1} alt='news image' width={0} height={0} />
                            <div>
                                <h5>01 Jan, 2015</h5>
                                <h3>Fashion Industry</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="news__card card2">
                            <Image src={NewsImg2} alt='news image' width={0} height={0} />
                            <div>
                                <h5>01 Jan, 2015</h5>
                                <h3>Best Design Tools</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="news__card card3">
                            <Image src={NewsImg3} alt='news image' width={0} height={0} />
                            <div>
                                <h5>01 Jan, 2015</h5>
                                <h3>HR Community</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News