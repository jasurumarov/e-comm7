'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// Icons
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";

const Products = ({ data, category }) => {
    const [valueOfCategory, setValueOfCategory] = useState('all')

    let categories = category?.map((el, i) => (
        <li className={valueOfCategory === el ? 'active' : ''} onClick={() => setValueOfCategory(el)} key={i}>{el}</li>
    ))

    const filteredProducts = valueOfCategory === 'all' ? data : data.filter(el => el.category === valueOfCategory);


    let products = filteredProducts?.map(el => (
        <div key={el.id} className="products__card">
            <div className="products__card-img">
                <Image src={el.image} alt={el.title} width={298} height={276} />
                <div>
                    <button><FaRegHeart /></button>
                    <button><LuShoppingCart /></button>
                </div>
            </div>
            <h3>{el.title}</h3>
            <div className='products__card-stars'>
                {[...Array(5)].map((item, i) => (
                    <FaStar key={i} className={i < Math.round(el.rating.rate) ? 'rate' : 'unrate'} />
                ))}
            </div>
            {/* <div className='products__card-stars'>{Array(Math.round(el.rating.rate)).fill(<FaStar className='rate'/>) } {Array(5 - Math.round(el.rating.rate)).fill(<FaStar className='unrate'/>) }</div> */}
            <div className="products__card-prices">
                <h4>${Math.round(el.price)}</h4>
                <p><del>${Math.round(el.price * 1.4)}</del> <span>24% Off</span></p>
            </div>
        </div>
    ))
    return (
        <section className='products-section'>
            <div className="container">
                <div className="products-section__content">
                    <h2>BEST SELLER</h2>
                    <ul>
                        <li value={"all"} className={valueOfCategory === 'all' ? "active" : ''} onClick={() => setValueOfCategory('all')}>All</li>
                        {categories}
                    </ul>
                    <div className="products__cards">
                        {products}
                    </div>
                    <div className="see-more">
                        <button>LOAD MORE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products