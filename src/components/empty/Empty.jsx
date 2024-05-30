import React from 'react'
import EmptyImg from '@/assets/images/nothing-here-v4.jpg'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const Empty = ({data}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '140px 0' }} className='empty'>
      <Image style={{marginTop: '-220px',  marginRight: '-20px' }} width={800} src={EmptyImg} alt="" />
      <h3 style={{marginTop: '-20px', fontSize: '28px'}}>Your {data} is empty!</h3>
      <Link href={"/"}><Button style={{ background: '#40bfff', paddingTop: '8px', marginTop: '20px' }} variant="contained">Continue Shopping</Button></Link>
    </div>
  )
}

export default Empty