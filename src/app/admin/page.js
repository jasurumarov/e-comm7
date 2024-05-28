import AdminContent from '@/components/adminContent/AdminContent'
import InnerNavbar from '@/components/innerNavbar/InnerNavbar'
import React from 'react'

const Admin = () => {
    
    return (
        <main className='admin-page'>
            <InnerNavbar outerPage={<></>} activePage={"Admin"} />
            <AdminContent/>
        </main>
    )
}

export default Admin