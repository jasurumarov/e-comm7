import { removeAllItemsFromCart } from '@/lib/slice/cartSlice'
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'


const Payment = ({ setPayment }) => {
    let dispatch = useDispatch()
    const handlePayment = () => {
        setPayment(p => !p)
        dispatch(removeAllItemsFromCart())
    }
    return (
        <>
            <div onClick={() => setPayment(p => !p)} className="payment__overlay"></div>
            <form className='payment'>
                <button onClick={() => setPayment(p => !p)} className="payment__close-btn"><IoCloseSharp /></button>
                <h2>Make Payment</h2>
                <div className='payment__inputs'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <div className='payment__area'>
                    <input type="email" placeholder='Email Address' />
                    <div>
                        <textarea rows={4} placeholder='Adress for Delivery'></textarea>
                        <input type="number" placeholder='Mobile Phone' />
                    </div>
                </div>
                <div className="payment__method">
                    <h3>Select Method of Payment</h3>
                </div>
                <div className='payment-btn'>
                    <button onClick={handlePayment}>Go to Payment</button>
                </div>
            </form>
        </>
    )
}

export default Payment