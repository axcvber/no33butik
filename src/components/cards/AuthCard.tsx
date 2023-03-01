import React, { ReactNode } from 'react'
import Logo from '../Logo'
import Heading from '../shared/Heading'

interface IAuthCard {
  title: string
  desc?: string
  children: ReactNode
}

const AuthCard: React.FC<IAuthCard> = ({ title, desc, children }) => {
  return (
    <div className='flex flex-1 justify-center items-center container'>
      <div className='max-w-[320px] mt-16 mb-8 flex flex-col items-center'>
        <Logo />
        <div className='text-center mt-4 mb-5'>
          <Heading title={title} className='text-3xl' />
          {desc && <p className='text-sm text-text mt-2'>{desc}</p>}
        </div>

        {children}
      </div>
    </div>
  )
}

export default AuthCard
