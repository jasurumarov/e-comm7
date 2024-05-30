'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import Products from '@/components/products/Products'
import Empty from '@/components/empty/Empty'


const WishlistContent = () => {
    let data = useSelector(state => state.wishlist.value)
    return (
        <div>
            {data.length
                ?
                <Products data={data} category={[]} />
                :
                <Empty data={'wishlist'}/>
            }
        </div>
    )
}

export default WishlistContent