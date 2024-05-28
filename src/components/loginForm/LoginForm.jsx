'use client'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import React from 'react'

const LoginForm = () => {
    let [username, setUsername] = useState('mor_2314')
    let [password, setPassword] = useState('83r5^_')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)

        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const password = formData.get('password')

        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })

        if (response.ok) {
            const data = await response.json()
            localStorage.setItem("x-auth-token", data.token)
            router.push('/admin')
            setLoading(false)
        } else {
            setLoading(false)

        }
    }
    console.log(loading);
    return (
        <section className='login-section'>
            <div className="container">
                <form onSubmit={handleSubmit} className="login-section__content">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} id='username' name='username' type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' name='password' type="password" />
                    </div>
                    <article>
                        <button disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
                    </article>
                </form>
            </div>
        </section>
    )
}

export default LoginForm