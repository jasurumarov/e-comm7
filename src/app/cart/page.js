import React from 'react'
import CartContent from '@/components/cartContent/CartContent'
import InnerNavbar from '@/components/innerNavbar/InnerNavbar'

const Cart = () => {
    return (
        <main className='cart-page'>
            <InnerNavbar outerPage={<></>} activePage={"Cart"} />
            <CartContent/>
        </main>
    )
}

export default Cart