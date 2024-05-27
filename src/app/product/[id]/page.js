import React from 'react'
import { getData } from '@/fetch'

// Components
import InnerNavbar from '@/components/innerNavbar/InnerNavbar'
import DetailProductContent from '@/components/detailProductContent/DetailProductContent'

const DetailProduct = async ({params: {id}}) => {
  let singleProduct = await getData(`/products/${id}`)
  let data = await getData('/products')
  
  return (
    <main className='detailProduct-page'>
        <InnerNavbar outerPage={"Hot Deal"} activePage={"Nike Airmax 270 React"}/>
        <DetailProductContent data={data} singleProduct={singleProduct}/>
    </main>
  )
}

export default DetailProduct