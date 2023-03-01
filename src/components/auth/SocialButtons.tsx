import React from 'react'
import { FaApple, FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Button from '../shared/Button'

const SocialButtons = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Button
        fullWidth
        startIcon={<FcGoogle />}
        overlayStyles='!bg-white ring-1 ring-gray-200 !shadow-none hover:!bg-gray-50'
        textStyles='!text-[#333] !font-semibold'
      >
        Continue with Google
      </Button>
      <Button fullWidth startIcon={<FaFacebook />} overlayStyles='!bg-[#1877F2] hover:!bg-[#1568D5]'>
        Continue with Facebook
      </Button>
      <Button fullWidth startIcon={<FaApple />} color='secondary'>
        Continue with Apple
      </Button>
    </div>
  )
}

export default SocialButtons
