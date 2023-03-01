import Heading from '@/components/shared/Heading'
import { AccountPageLayout } from '@/layouts/AccountPageLayout'
import accountLinks from '@/routes/accountLinks'
import Link from 'next/link'
import React from 'react'

const AccountPage = () => {
  return (
    <div>
      <Heading title='Welcome Alex' />
      <p className='text-text text-sm py-4'>
        From the "My Account" page, you can track your orders and malfunction/return/change transactions, view the gift
        certificates and points you have earned, and easily adjust your account settings such as membership information
        update, password and address change.
      </p>
      <ul className='grid grid-cols-3  w-full gap-3'>
        {accountLinks.map((item) => (
          <li
            key={item.path}
            className='flex bg-gray-100 flex-col justify-center items-center min-h-[150px] text-sm [&_svg]:text-3xl [&_svg]:mb-2'
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

AccountPage.getLayout = AccountPageLayout

export default AccountPage
