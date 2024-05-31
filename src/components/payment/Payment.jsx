'use client'
import React, { useState } from 'react'

// Icons
import { removeAllItemsFromCart } from '@/lib/slice/cartSlice'
import { IoCloseSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { FiCreditCard } from 'react-icons/fi'
import { BsPaypal } from "react-icons/bs";
import { AiOutlineBank } from "react-icons/ai";

// Token and ID
const BOT_TOKEN = "7167621990:AAFEFIaAPwbfqpugbkwxmUFp0CyADqu1J8Y"
const CHAT_ID = "-1002035440165"

// InitialState
let initialState = {
    fname: "",
    lname: "",
    email: "",
    adress: "",
    phone: "",
}

const Payment = ({ setPayment, products }) => {
    let dispatch = useDispatch()
    let [data, setData] = useState(initialState)

    const handleSubmit = e => {
        e.preventDefault()
        let text = `Ism: <b>${data.fname}</b>`
        text += "%0A"
        text += `Familya: <b>${data.fname}</b>`
        text += "%0A"
        text += `Email: <b>${data.email}</b>`
        text += "%0A"
        text += `Adress: <b>${data.adress}</b>`
        text += "%0A"
        text += `Tel: <b>${data.phone}</b>`
        text += "%0A"
        text += "%0A"

        text += products?.map(el => (
            `<i>${el.title}</i>`
        ))

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
        setData(initialState)
        setPayment(p => !p)
        dispatch(removeAllItemsFromCart())
    }
    return (
        <>
            <div onClick={() => setPayment(p => !p)} className="payment__overlay"></div>
            <form onSubmit={handleSubmit} className='payment'>
                <button onClick={() => setPayment(p => !p)} className="payment__close-btn"><IoCloseSharp /></button>
                <h2>Make Payment</h2>
                <div className='payment__inputs'>
                    <input required value={data.fname} onChange={e => setData(p => ({ ...p, fname: e.target.value }))} type="text" placeholder='First Name' />
                    <input required value={data.lname} onChange={e => setData(p => ({ ...p, lname: e.target.value }))} type="text" placeholder='Last Name' />
                </div>
                <div className='payment__area'>
                    <input required value={data.email} onChange={e => setData(p => ({ ...p, email: e.target.value }))} type="email" placeholder='Email Address' />
                    <div>
                        <textarea required value={data.adress} onChange={e => setData(p => ({ ...p, adress: e.target.value }))} rows={4} placeholder='Adress for Delivery'></textarea>
                        <input required value={data.phone} onChange={e => setData(p => ({ ...p, phone: e.target.value }))} type="number" placeholder='Mobile Phone' />
                    </div>
                </div>
                <div className="payment__method">
                    <h3>Select Method of Payment</h3>
                    <label htmlFor="card">
                        <div ><FiCreditCard /> Credit Card Or Debit</div>
                        <input defaultChecked id='card' name='radio' type="radio" />
                    </label>
                    <label htmlFor="paypal">
                        <div ><BsPaypal /> Paypal</div>
                        <input id='paypal' name='radio' type="radio" />
                    </label>
                    <label htmlFor="bank">
                        <div ><AiOutlineBank /> Bank Transfer</div>
                        <input id='bank' name='radio' type="radio" />
                    </label>
                </div>
                <div className='payment-btn'>
                    <button >Go to Payment</button>
                </div>
            </form>
        </>
    )
}

export default Payment