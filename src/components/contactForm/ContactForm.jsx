'use client'
import React, { useState } from 'react'

// Token and ID
const BOT_TOKEN = "7167621990:AAFEFIaAPwbfqpugbkwxmUFp0CyADqu1J8Y"
const CHAT_ID = "-1002035440165"

// InitialState
let initialState = {
    fullname: "",
    email: "",
    message: "",
}

const ContactForm = () => {
    let [data, setData] = useState(initialState)
    const handleSubmit = e => {
        e.preventDefault()
        let text = `Ism: <b>${data.fullname}</b>`
        text += "%0A"
        text += `Email: <b>${data.email}</b>`
        text += "%0A"
        text += "%0A"

        text += `Message: <i>${data.message}</i>`

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
        setData(initialState)
    }
    return (
        <section className='contact-section'>
            <div className="container">
                <div className="contact-section__content">
                    <div className="contact__title">
                        <h1>Get in touch</h1>
                        <p>contact@e-comm.ng</p>
                        <p>+234 4556 6665 34</p>
                        <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="contact__form">
                        <div>
                            <label htmlFor="fullname">Fullname</label>
                            <input required value={data.fullname} onChange={e => setData(p => ({ ...p, fullname: e.target.value }))} type="text" id='fullname' placeholder='James Doe' />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input required value={data.email} onChange={e => setData(p => ({ ...p, email: e.target.value }))} type="text" id='email' placeholder='jamesdoe@gmail.com' />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea required value={data.message} onChange={e => setData(p => ({ ...p, message: e.target.value }))} rows={10} name="" id="message" placeholder='Type your message'></textarea>
                        </div>
                        <article>
                            <button>Send</button>
                        </article>
                    </form>
                </div>
                <div className="search">
                    <form className='search'>
                        <input type="search" placeholder='Search query...' />
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm