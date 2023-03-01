import { BiUser, BiShoppingBag, BiDetail, BiHeart, BiCreditCardFront, BiBox } from 'react-icons/bi'
import { AccountPaths } from '.'

const accountLinks = [
  {
    label: 'Personal Info',
    icon: <BiUser />,
    path: AccountPaths.PERSONAL_INFO,
  },
  {
    label: 'Orders',
    icon: <BiDetail />,
    path: AccountPaths.ORDERS,
  },
  {
    label: 'Shopping Cart',
    icon: <BiShoppingBag />,
    path: AccountPaths.SHOPING_CART,
  },
  {
    label: 'Favorites',
    icon: <BiHeart />,
    path: AccountPaths.FAVORITES,
  },
  {
    label: 'Payment Methods',
    icon: <BiCreditCardFront />,
    path: AccountPaths.PAYMENT_METHOD,
  },
  {
    label: 'Delivery Addresses',
    icon: <BiBox />,
    path: AccountPaths.DELIVERY_ADDRESSES,
  },
]

export default accountLinks
