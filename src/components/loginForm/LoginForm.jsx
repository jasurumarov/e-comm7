import React from 'react'

const LoginForm = () => {
    return (
        <section className='login-section'>
            <div className="container">
                <form className="login-section__content">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input id='username' type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" />
                    </div>
                    <article>
                        <button>LOGIN</button>
                    </article>
                </form>
            </div>
        </section>
    )
}

export default LoginForm