'use client'
import React from 'react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

const AdminContent = () => {
  let isLogin = localStorage.getItem("x-auth-token")
  if (!isLogin) {
    return redirect("/register")
  }

  let router = useRouter()
  let handleLogout = () => {
    localStorage.removeItem('x-auth-token')
    router.push("/")
  }
  return (
    <section className='admin-section'>
      <div className="container">
        <div className="admin-section__content">
          <h1>Admin panel</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </section>
  )
}

export default AdminContent