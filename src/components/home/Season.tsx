import Image from 'next/image'
import React from 'react'
import Button from '../shared/Button'
import Heading from '../shared/Heading'

const Season = () => {
  return (
    <div className='my-28 container max-w-7xl'>
      <section className='flex'>
        <div className='w-1/2 flex gap-8 justify-center items-center'>
          <div className='w-[320px]'>
            <Heading title='Fw 2022/23 Yeni sezon' />
            <p className='text-text my-3'>
              Kadınlar için en yeni ürünlerimizle en son trendleri keşfedin. Kot pantolon, moto ceket, pantolon ve daha
              fazlasında en sıcak olanı satın alın.
            </p>
            <Button>Alişveri̇şe başla</Button>
          </div>
        </div>
        <div className='w-8/12 h-[800px] relative rounded-xl overflow-hidden shadow-lg'>
          <Image
            fill
            alt='season'
            src='https://res.cloudinary.com/da7mdxekb/image/upload/v1676069234/14092022-6_1_ijrshk.jpg'
            className='object-cover'
          />
        </div>
      </section>
      <section className='flex -mt-24'>
        <div className='w-9/12 h-[600px] relative rounded-xl overflow-hidden shadow-lg'>
          <Image
            fill
            alt='season'
            src='https://res.cloudinary.com/da7mdxekb/image/upload/v1676069234/14092022-6_1_ijrshk.jpg'
            className='object-cover'
          />
        </div>
        <div className='w-8/12 flex gap-8 justify-center items-center'>
          <div className='w-[400px]'>
            <p className='text-text my-3'>
              Kadınlar için en yeni ürünlerimizle en son trendleri keşfedin. Kot pantolon, moto ceket, pantolon ve daha
              fazlasında en sıcak olanı satın alın.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Season
