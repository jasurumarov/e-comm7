'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

// Icons
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { useSelector } from 'react-redux';

const SupHeader = () => {
    const [isLogin, setIsLogin] = useState(false);
    const wishlist = useSelector(state => state.wishlist.value);
    const cart = useSelector(state => state.cart.value);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem("x-auth-token");
            setIsLogin(!!token);
        }
    }, []);

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
                            <Link href={"/"}><FiHome /></Link>
                            <h3>Home</h3>
                        </div>
                        <div className='supHeader__rightSide-links'>
                            <Link href={isLogin ? '/admin' : '/register'}><FaRegUser /></Link>
                            <h3>Account</h3>
                        </div>
                        <div className="supHeader__rightSide-links">
                            <Link href={"/wishlist"}><FaRegHeart /></Link>
                            <Link href={"/wishlist"}><sup>{wishlist.length}</sup></Link>
                            <h3>Wishlist</h3>
                        </div>
                        <div className='supHeader__rightSide-links'>
                            <Link href={"/cart"}><LuShoppingCart /></Link>
                            <Link href={"/cart"}><sup>{cart.length}</sup></Link>
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

export default SupHeader;
