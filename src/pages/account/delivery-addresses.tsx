import Heading from '@/components/shared/Heading'
import { AccountPageLayout } from '@/layouts/AccountPageLayout'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const DeliveryAddressesPage = () => {
  return (
    <div>
      <Heading title='Saved Delivery Addresses' />
      <p className='text-sm text-text max-w-lg'>
        You currently don't have any saved delivery addresses. Add an address here to be prefilled for quicker checkout.
      </p>
      <div className='w-60 h-40 border mt-6 p-4 flex flex-col justify-between rounded-xl cursor-pointer hover:bg-gray-50 transition-colors'>
        <span className='font-medium'>New Address</span>
        <AiOutlinePlus fontSize={26} />
      </div>
    </div>
  )
}

DeliveryAddressesPage.getLayout = AccountPageLayout

export default DeliveryAddressesPage
