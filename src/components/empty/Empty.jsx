import React from 'react'
import EmptyImg from '@/assets/images/nothing-here-v2.png'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const Empty = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '140px 0' }} className='empty'>
      <Image style={{marginTop: '-220px',  marginRight: '-20px' }} width={800} src={EmptyImg} alt="" />
      <Link href={"/"}><Button style={{ background: '#40bfff', paddingTop: '8px', marginTop: '20px' }} variant="contained">Continue Shopping</Button></Link>
    </div>
  )
}

export default Empty