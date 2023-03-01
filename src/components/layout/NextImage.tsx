import Image, { ImageProps } from 'next/image'
import React, { useState } from 'react'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface INextImage extends ImageProps {
  blured?: boolean
}

const NextImage: React.FC<INextImage> = ({ blured = true, ...props }) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      {...props}
      className={cn(
        'duration-700 ease-in-out',
        isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100',
        props.className || ''
      )}
      onLoadingComplete={() => setLoading(false)}
      // className={cn(
      //   'transition-all',
      //   isLoading && blured ? 'grayscale blur-md scale-105' : 'grayscale-0 blur-0 scale-100',
      //   props.className || ''
      // )}
      // onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default NextImage
