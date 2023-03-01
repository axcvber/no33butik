import React, { ReactNode } from 'react'
import Link from 'next/link'
import { BiUser, BiShoppingBag, BiDetail, BiHeart, BiCreditCardFront, BiBox, BiExit } from 'react-icons/bi'
import accountLinks from '@/routes/accountLinks'
import { useRouter } from 'next/router'

const AccountSidebar = () => {
  const router = useRouter()
  return (
    <aside>
      <nav>
        <ul className='flex gap-2 flex-col'>
          {accountLinks.map((item) => (
            <SidebarItem
              key={item.path}
              isActive={router.pathname === item.path}
              path={item.path}
              label={item.label}
              icon={item.icon}
            />
          ))}
          {/* <SidebarItem label='Exit' icon={<BiExit />} /> */}
        </ul>
      </nav>
    </aside>
  )
}

interface ISidebarItem {
  label: string
  icon: ReactNode
  path: string
  isActive?: boolean
}

const SidebarItem: React.FC<ISidebarItem> = ({ label, icon, path, isActive }) => {
  return (
    <li>
      <Link
        href={path}
        className={`flex py-2 px-3 font-medium transition-colors text-gray-600 duration-100 text-sm [&_svg]:text-lg hover:bg-gray-100 gap-2 items-center rounded-lg ${
          isActive && 'bg-gray-100'
        }`}
      >
        {icon}
        {label}
      </Link>
    </li>
  )
}

export default AccountSidebar
