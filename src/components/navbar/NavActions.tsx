import { useAppStore } from '@/store'
import React, { useState } from 'react'
import { BiShoppingBag, BiSearch, BiHeart, BiExit } from 'react-icons/bi'
import Modal from '../shared/Modal'
import { MODAL_TYPES } from '../modal/ModalProvider'
import { signOut, useSession } from 'next-auth/react'
import { getCustomerToken } from '@/lib/shopify/utils/customer-token'
import IconButton from '../shared/IconButton'
import HoverDropdown from '../shared/dropdown/HoverDropdown'
import Button from '../shared/Button'
import { HiChevronDown } from 'react-icons/hi'
import accountLinks from '@/routes/accountLinks'
import Link from 'next/link'
import Dropdown from '../shared/dropdown/Dropdown'

const NavActions = () => {
  const { showModal } = useAppStore()
  // const { data: session } = useSession()
  // console.log('user', session?.user)
  // console.log('get token', getCustomerToken())
  const isAuth = false

  const singInModal = () => {
    showModal({ modalType: MODAL_TYPES.SIGN_IN_MODAL })
  }

  return (
    <div className='flex gap-6 items-center'>
      <div className='flex gap-1 items-center'>
        <IconButton rounded size='large' variant='ghost' color='secondary' icon={<BiSearch />} />

        <IconButton
          rounded
          size='large'
          variant='ghost'
          color='secondary'
          icon={
            <div className='count-badge'>
              <BiHeart />
              <div className='count'>
                <span>10</span>
              </div>
            </div>
          }
        />

        <IconButton
          rounded
          size='large'
          variant='ghost'
          color='secondary'
          icon={
            <div className='count-badge'>
              <BiShoppingBag />
              <div className='count'>
                <span>10</span>
              </div>
            </div>
          }
        />
      </div>

      {isAuth ? (
        <div className='flex gap-3'>
          <Dropdown
            className='!p-3'
            placement='bottom-end'
            trigger={
              <Button variant='link' color='secondary' endIcon={<HiChevronDown />}>
                Hi, Alex
              </Button>
            }
            type='hover'
          >
            <ul className='flex flex-col'>
              {accountLinks.map((item) => (
                <Link href={item.path} key={item.path} passHref legacyBehavior>
                  <Button
                    onClick={() => console.log('haa')}
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
              <Button
                key='delete'
                align='left'
                className='!py-2 !px-3'
                fullWidth
                startIcon={<BiExit />}
                variant='ghost'
                color='error'
              >
                Log Out
              </Button>
            </ul>
          </Dropdown>
        </div>
      ) : (
        <div className='flex gap-3 text-sm font-medium'>
          <span className='cursor-pointer' onClick={singInModal}>
            Üye Girişi
          </span>
          <span>|</span>
          <span className='cursor-pointer'>Üye Ol</span>
        </div>
      )}
    </div>
  )
}

export default NavActions
