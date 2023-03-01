import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'

const Page = ({ blok }: any) => {
  return (
    <main className='text-center mt-4' {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}

export default Page
