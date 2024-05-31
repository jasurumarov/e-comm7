'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '@/lib/slice/wishlistSlice';
import { addToCart } from '@/lib/slice/cartSlice';
import { toast } from 'react-toastify';

// Icons
import { FaHeart, FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";

const Products = ({ data, category }) => {
    // Wishlist
    let wishlist = useSelector(state => state.wishlist.value)
    let cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(toggleWishlist(JSON.parse(localStorage.getItem("wishlist")) || []))
        dispatch(addToCart(JSON.parse(localStorage.getItem("cart")) || []))
    }, [])

    const handleWishlist = payload => {
        let index = wishlist.findIndex(el => el.id === payload.id);
        let result = null
        if (index < 0) {
            result = [...wishlist, payload]
        } else {
            result = wishlist.filter(el => el.id !== payload.id)
        }
        dispatch(toggleWishlist(result))
        localStorage.setItem("wishlist", JSON.stringify(result))
    }
    
    const handleCart = payload => {
        let index = cart.findIndex(el => el.id === payload.id);
        let result = null
        if (index < 0) {
            result = [...cart, { ...payload, quantity: 1 }]
        } else {
            result = cart.map((el, inx) =>
                inx === index ? { ...el, quantity: el.quantity + 1 } : el
            );
        }
        dispatch(addToCart(result))
        localStorage.setItem("cart", JSON.stringify(result))
        toast.success("Product is added to cart")
    }

    const [valueOfCategory, setValueOfCategory] = useState('all')
    const [visibleProducts, setVisibleProducts] = useState(8);

    let categories = category?.map((el, i) => (
        <li className={valueOfCategory === el ? 'active' : ''} onClick={() => {
            setValueOfCategory(el)
            setVisibleProducts(4)
        }} key={i}>{el}</li>
    ))

    const filteredProducts = valueOfCategory === 'all' ? data : data.filter(el => el.category === valueOfCategory);
    const displayedProducts = filteredProducts.slice(0, visibleProducts);

    const handleLoadMore = () => {
        setVisibleProducts(prev => prev + 8);
    };

    let products = displayedProducts?.map(el => (
        <div key={el.id} className="products__card">
            <div className="products__card-img">
                <Image src={el.image} alt={el.title} width={298} height={276} />
                <div>
                    <button onClick={() => handleWishlist(el)}>
                        {
                            wishlist?.some(item => item.id === el.id)
                                ?
                                <FaHeart style={{ color: "red" }} />
                                :
                                <FaRegHeart />
                        }
                    </button>
                    <button onClick={() => handleCart(el)}><LuShoppingCart /></button>
                </div>
            </div>
            <Link href={`/product/${el.id}`}><h3>{el.title}</h3></Link>
            <div className='products__card-stars'>
                {[...Array(5)].map((item, i) => (
                    <FaStar key={i} className={i < Math.round(el?.rating?.rate) ? 'rate' : 'unrate'} />
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
                        <li value={"all"} className={valueOfCategory === 'all' ? "active" : ''} onClick={() => {
                            setValueOfCategory('all')
                            setVisibleProducts(8);
                        }}>All</li>
                        {categories}
                    </ul>
                    <div className="products__cards">
                        {products}
                    </div>
                    {visibleProducts < filteredProducts.length && (
                        <div className="see-more">
                            <button onClick={handleLoadMore}>LOAD MORE</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Products