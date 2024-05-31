'use client'
import React from 'react'
import Link from 'next/link';

// Icons
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { useSelector } from 'react-redux';

const SupHeader = () => {
    // let isLogin = localStorage.getItem("x-auth-token")

    let wishlist = useSelector(state => state.wishlist.value)
    // let cart = useSelector(state => state.cart.value)
    return (
        <header className='supHeader'>
            <div className="container">
                <div className="supHeader__content">
                    <div className="supHeader__options">
                        <select name="" id="">
                            <option value="EN">EN</option>
                            <option value="RU">RU</option>
                            <option value="UZ">UZ</option>
                        </select>
                        <select name="" id="">
                            <option value="EN">USD</option>
                            <option value="RU">RUB</option>
                            <option value="UZ">UZS</option>
                        </select>
                    </div>
                    <div className='supHeader__rightSide'>
                        <div className='supHeader__rightSide-links'>
                            <Link href={"register"}><FiHome /></Link>
                            <h3>Home</h3>
                        </div>
                        {/* <div className='supHeader__rightSide-links'>
                            <Link href={isLogin ? '/admin' : '/register'}><FaRegUser /></Link>
                            <h3>Account</h3>
                        </div> */}
                        <div className="supHeader__rightSide-links">
                            <Link href={"/wishlist"}><FaRegHeart /></Link>
                            <sup>{wishlist.length}</sup>
                            <h3>Wishlist</h3>
                        </div>
                        <div className='supHeader__rightSide-links'>
                            <Link href={"/cart"}><LuShoppingCart /></Link>
                            {/* <sup>{cart.length}</sup> */}
                            <h3>Cart</h3>
                        </div>
                        <div className='supHeader__rightSide-search'>
                            <input type="search" placeholder='Search...' />
                            <LuSearch />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SupHeader