import React from 'react'
import { storyblokEditable } from '@storyblok/react'

interface IFeature {
  blok: number
}

const Feature: React.FC<IFeature> = ({ blok }) => {
  return (
    <div className='column feature' {...storyblokEditable(blok)}>
      {blok.name}
      {blok.text}
    </div>
  )
}

export default Feature
