import NextImage from '@/components/layout/NextImage'
import Button from '@/components/shared/Button'
import React, { ReactNode } from 'react'
import { IoMdArrowBack } from 'react-icons/io'

const AuthPageLayout = (page: ReactNode) => {
  return (
    <div className='flex min-h-screen relative'>
      <div className='absolute top-5 left-5'>
        <Button startIcon={<IoMdArrowBack fontSize={18} />} variant='ghost' color='secondary' size='small'>
          Back
        </Button>
      </div>
      {page}
      <div className='hidden lg:flex flex-1 relative'>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <NextImage
            priority
            fill
            sizes='100vw'
            quality={100}
            className='object-cover'
            src='https://res.cloudinary.com/da7mdxekb/image/upload/v1676826080/pexels-carrie-kin-2989689_ybdc0b.jpg'
            alt='background'
          />
        </div>
      </div>
    </div>
  )
}

export default AuthPageLayout
