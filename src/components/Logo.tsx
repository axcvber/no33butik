import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        priority
        src={'https://static.ticimax.cloud/30966/customcss/images/no33logo.png'}
        width={100}
        height={55}
        sizes='100vw'
        className='object-contain'
        alt='logo'
      />
    </Link>
  )
}

export default Logo
