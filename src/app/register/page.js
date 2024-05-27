import InnerNavbar from '@/components/innerNavbar/InnerNavbar'
import LoginForm from '@/components/loginForm/LoginForm'
import React from 'react'

const page = () => {
    return (
        <main className='register-page'>
            <InnerNavbar outerPage={<></>} activePage={"Login"} />
            <LoginForm/>
        </main>
    )
}

export default page