'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Icons
import { FaStar } from 'react-icons/fa'

const FeatProducts = ({ data }) => {
    let products = data?.slice(0, 3)?.map(el => (
        <div key={el.id} className="featProducts__card">
            <article>
                <Link href={`/product/${el.id}`}>
                    <Image src={el.image} alt={el.title} width={152} height={152} />
                </Link>
            </article>
            <div className='featProducts__card-title'>
                <Link href={`/product/${el.id}`}><h3 title={el.title}>{el.title} Good</h3></Link>
                <div className="featProducts__card-stars">
                    {[...Array(5)].map((item, i) => (
                        <FaStar key={i} className={i < Math.round(el.rating.rate) ? 'rate' : 'unrate'} />
                    ))}
                </div>
                {/* <div className='featProducts__card-stars'>{Array(Math.round(el.rating.rate)).fill(<FaStar className='rate'/>) } {Array(5 - Math.round(el.rating.rate)).fill(<FaStar className='unrate'/>) }</div> */}
                <p>${Math.round(el.price)} <del>${Math.round(el.price * 1.2)}</del></p>
            </div>
        </div>
    ))
    return (
        <section className='featProducts-section'>
            <div className="container">
                <div className="featProducts-section__content">
                    <h2>FEATURED PRODUCTS</h2>
                    <div className="featProducts__cards">
                        {products}
                    </div>
                    <form>
                        <input type="search" placeholder='Search query...' />
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FeatProducts