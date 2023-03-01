import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'

const Teaser = ({ blok }: any) => {
  console.log('blok', blok)

  return (
    <h2 className='text-2xl mb-10' {...storyblokEditable(blok)}>
      {blok.headline}
      <Image width={500} height={300} src={blok.image.filename} alt={blok.image.alt} />
    </h2>
  )
}

export default Teaser
