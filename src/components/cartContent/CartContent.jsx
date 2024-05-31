// 'use client'
// import Image from 'next/image'
// import React, { useState } from 'react'

// // Redux Toolkit
// import { useDispatch, useSelector } from 'react-redux'
// import { decrementCartQuantity, incrementCartQuantity, removeItemFromCart } from '@/lib/slice/cartSlice'

// // Components
// import Payment from '../payment/Payment'
// import Empty from '../empty/Empty'

// // Icons
// import { IoCloseSharp } from 'react-icons/io5'

// const CartContent = () => {
//     // State for payment modal
//     let [payment, setPayment] = useState(false)

//     let cart = useSelector(s => s.cart.value)
//     let dispatch = useDispatch(s => s.cart.value)

//     let product = cart?.map(el => (
//         <div key={el.id} className="cart__table-product">
//             <div className="cart__table-product__title">
//                 <button onClick={() => dispatch(removeItemFromCart(el))}><IoCloseSharp /></button>
//                 <div>
//                     <article>
//                         <Image width={100} height={200} src={el.image} alt={el.title} />
//                     </article>
//                     <h3 title={el.title}>{el.title}</h3>
//                 </div>
//             </div>
//             <p className='cart__table-product__price'>${Math.round(el.price)}</p>
//             <div className="cart__table-product__qty">
//                 <button disabled={el.quantity <= 1} onClick={() => dispatch(decrementCartQuantity(el))}>-</button>
//                 <span>{el.quantity}</span>
//                 <button onClick={() => dispatch(incrementCartQuantity(el))}>+</button>
//             </div>
//             <p>${Math.round(el.price * el.quantity)}</p>
//         </div>
//     ))

//     // Totalprice
//     let totalPrice = cart?.reduce((sum, item) => sum + (item.price * item.quantity), 0)
//     return (
//         <>
//             {
//                 cart.length
//                     ?
//                     <section className='cart-section'>
//                         <div className="container">
//                             <div className="cart__table">
//                                 <div className="cart__table-title">
//                                     <h2>PRODUCT</h2>
//                                     <h2>PRICE</h2>
//                                     <h2>QTY</h2>
//                                     <h2>UNIT PRICE</h2>
//                                 </div>
//                                 <div className="cart__table-products">
//                                     {product}
//                                 </div>
//                             </div>
//                             <div className="cart__shopping">
//                                 <form className="cart__shopping-vaucher">
//                                     <input type="text" placeholder='Voucher code' />
//                                     <button>Redeem</button>
//                                 </form>
//                                 <div className="cart__shopping-total">
//                                     <ul>
//                                         <li>Subtotal <p>$998</p></li>
//                                         <li>Shipping fee <p>$20</p></li>
//                                         <li>Coupon <p>No</p></li>
//                                     </ul>
//                                     <div>
//                                         <h3>TOTAL</h3>
//                                         <h3>${Math.round(totalPrice + 20)}</h3>
//                                     </div>
//                                     <button onClick={() => setPayment(p => !p)}>Check out</button>
//                                 </div>
//                             </div>
//                         </div>
//                         {
//                             payment ? <Payment products={cart} payment={payment} setPayment={setPayment} /> : <></>
//                         }
//                     </section>
//                     :
//                     <div style={{ marginTop: '134px' }}>
//                         <Empty data={'cart'} />
//                     </div>
//             }
//         </>
//     )
// }

// export default CartContent