import NextAuth, { NextAuthOptions, Session, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import customerLogin from '@/lib/shopify/customer/customer-login'
import { getConfig } from '@/lib/shopify/api/config'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'grafbase',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        const config = getConfig()
        const response = await customerLogin({
          config,
          variables: {
            email,
            password,
          },
        })
        const user = response?.customer
        console.log('USER', user)

        if (user) {
          return user
        }
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: 'secretKey',
}

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: '338305928962-2pep66lm92mgcjvmss1fn4ndgm3o4m95.apps.googleusercontent.com',
//       clientSecret: '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',
//     }),
//   ],
//   secret: 'suka',
//   session: {
//     strategy: 'jwt',
//   },
//   callbacks: {
//     async session({ session, token, user }: any) {
//       session.jwt = token.jwt
//       session.id = token.id
//       return session
//     },

//     async jwt({ token, user, account }) {
//       const isSignIn = user ? true : false
//       if (isSignIn) {
//         // console.log('account.provider', account?.provider)
//         // console.log('account.access_token', account?.access_token)
//         // console.log('account.access_token', account?.access_token)
//         console.log('user', user)
//         // console.log('account', account)
//         // console.log('token', token)

//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`
//         )

//         const data = await response.json()
//         console.log('data', data)

//         token.jwt = data.jwt
//         token.id = data.user.id
//       }
//       return token
//     },
//   },
// }

export default NextAuth(authOptions)
