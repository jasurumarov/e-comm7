import React from 'react'
import InnerNavbar from '@/components/innerNavbar/InnerNavbar'
import WishlistContent from '@/components/wishlistContent/WishlistContent'
const Wishlist = async () => {

    return (
        <main className='wishlist-page'>
            <InnerNavbar outerPage={""} activePage={"Wishlist"}/>
            <h1>Wishlist</h1>
            <WishlistContent/>
        </main>
    )
}

export default Wishlist