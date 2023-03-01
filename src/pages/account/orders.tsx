import Button from '@/components/shared/Button'
import Dropdown from '@/components/shared/dropdown/Dropdown'
import Heading from '@/components/shared/Heading'
import { AccountPageLayout } from '@/layouts/AccountPageLayout'
import accountLinks from '@/routes/accountLinks'
import Link from 'next/link'
import React from 'react'

const OrdersPage = () => {
  return (
    <div className='flex justify-center items-center h-[600px]'>
      <Dropdown
        placement='top-center'
        trigger={
          <Button variant='link' color='secondary'>
            Hi, Alex
          </Button>
        }
      >
        <div className='w-[200px]'>
          <p>Account</p>
          {accountLinks.map((item) => (
            <Link href={item.path} key={item.path} passHref legacyBehavior>
              <Button
                as='a'
                align='left'
                className='!py-2 !px-3'
                fullWidth
                startIcon={item.icon}
                variant='ghost'
                color='secondary'
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </Dropdown>
    </div>
  )
}

OrdersPage.getLayout = AccountPageLayout

export default OrdersPage
