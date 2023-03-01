export enum AccountPaths {
  INDEX = '/account',
  PERSONAL_INFO = '/account/personal-info',
  ORDERS = '/account/orders',
  SHOPING_CART = '/cart',
  FAVORITES = '/account/favorites',
  PAYMENT_METHOD = '/account/payment-methods',
  DELIVERY_ADDRESSES = '/account/delivery-addresses',
}

export enum AuthPaths {
  LOGIN = '/auth/login',
  REGISTRATION = '/auth/registration',
  PASSWORD_RESET = '/auth/password-reset',
}

// export enum RouteNames {
//   HOME = '/',
//   ACCOUNT = AccountPaths.INDEX,
// }

export const RouteNames = {
  HOME: '/',
  ACCOUNT: AccountPaths.INDEX,
  AUTH: AuthPaths,
}

// export { default as accountLinks } from './accountLinks'
// export { default as navLinks } from './navLinks'
