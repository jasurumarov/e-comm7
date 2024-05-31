'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '@/lib/slice/wishlistSlice'
import Products from '@/components/products/Products'
import Empty from '@/components/empty/Empty'

const WishlistContent = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.wishlist.value)

    useEffect(() => {
        dispatch(toggleWishlist(JSON.parse(localStorage.getItem("wishlist")) || []))
    }, [dispatch])

    return (
        <div>
            {data.length > 0
                ? <Products data={data} category={[]} />
                : <Empty data={'wishlist'} />
            }
        </div>
    )
}

export default WishlistContent
