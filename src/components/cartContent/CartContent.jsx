import React from 'react'

// Icons
import { IoCloseSharp } from 'react-icons/io5'

const CartContent = () => {
    return (
        <section className='cart-section'>
            <div className="container">
                <div className="cart__table">
                    <div className="cart__table-title">
                        <h2>PRODUCT</h2>
                        <h2>PRICE</h2>
                        <h2>QTY</h2>
                        <h2>UNIT PRICE</h2>
                    </div>
                    <div className="cart__table-products">
                        <div className="cart__table-product">
                            <div className="cart__table-product__title">
                                <button><IoCloseSharp /></button>
                                <div>
                                    <img src="" alt="" />
                                    <h3>Nike Airmax 270 react</h3>
                                </div>
                            </div>
                            <p>$998</p>
                            <div className="cart__table-product__qty">
                                <button>-</button>
                                <span>2</span>
                                <button>+</button>
                            </div>
                            <p>$499</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartContent