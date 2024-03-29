import Cookies, { CookieAttributes } from 'js-cookie'
import { SHOPIFY_COOKIE_EXPIRE, SHOPIFY_CUSTOMER_TOKEN_COOKIE } from '../const'

export const getCustomerToken = () => Cookies.get(SHOPIFY_CUSTOMER_TOKEN_COOKIE)

export const setCustomerToken = (token: string | null, options?: CookieAttributes) => {
  console.log('TOKEN', token)

  if (!token) {
    Cookies.remove(SHOPIFY_CUSTOMER_TOKEN_COOKIE)
  } else {
    Cookies.set(
      'shopify_customerToken',
      token
      // options ?? {
      //   expires: SHOPIFY_COOKIE_EXPIRE,
      // }
    )
  }
}
