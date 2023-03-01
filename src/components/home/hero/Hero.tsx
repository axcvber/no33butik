import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ExploreWidget from './ExploreWidget'
import ScrollDown from './ScrollDown'

const Hero = () => {
  return (
    <div className='container flex mt-8 relative h-screen '>
      <div className='flex-1'>
        <h1 className='text-7xl font-display font-bold leading-[1.3]'>SIZIN IÇIN</h1>
        <h1 className='text-7xl font-display font-bold leading-[1.3]'>EN IYI MODA</h1>
        <h1 className='text-7xl font-display font-bold leading-[1.3]'>STILINI BULUN</h1>
        <div className='flex items-end justify-between'>
          <Image
            width={170}
            height={170}
            src='https://res.cloudinary.com/da7mdxekb/image/upload/v1675670457/slice1_mb6lyb.jpg'
            alt='hero'
          />
          <span className='text-text w-[250px]'>Tüm moda ürünlerini taze model ve yeni trendlerle sunuyoruz</span>
          <svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M22.5 1.875L16.875 16.875L1.875 22.5L16.875 28.125L22.5 43.125L28.125 28.125L43.125 22.5L28.125 16.875L22.5 1.875Z'
              fill='#FF9A66'
            />
          </svg>
        </div>

        <div className='flex items-center justify-between'>
          <ExploreWidget />

          <Image
            width={170}
            height={170}
            src='https://res.cloudinary.com/da7mdxekb/image/upload/v1675670460/slice2_jnny2g.png'
            alt='hero'
          />
          <ScrollDown />
        </div>
      </div>

      <div className='relative'>
        <Image
          width={500}
          height={700}
          src='https://res.cloudinary.com/da7mdxekb/image/upload/v1675627669/hero_r6tzch.png'
          alt='hero'
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default Hero
