import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import { SessionProvider } from 'next-auth/react'

import '@fontsource/josefin-sans/400.css'
import '@fontsource/josefin-sans/500.css'
import '@fontsource/josefin-sans/600.css'
import '@fontsource/josefin-sans/700.css'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

// export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       {/* <Layout> */}
//         <Component {...pageProps} />
//       {/* </Layout> */}
//     </SessionProvider>
//   )
// }

// const Layout = ({ Component, pageProps }) => {
//   if (Component.getLayout) {
//     return Component.getLayout(<Component {...pageProps} />);
//   } else {
//     return <Component {...pageProps} />;
//   }
// };

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page)

//   return getLayout(
//     <SessionProvider session={session}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </SessionProvider>
//   )
// }

// export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   // Use the layout defined at the page level, if available

//   return (
//     <SessionProvider session={session}>
//       <Page Component={Component} pageProps={pageProps} />
//     </SessionProvider>
//   )
// }

// const Page = ({ Component, pageProps }: AppPropsWithLayout) => {
//   if (Component.getLayout) {
//     return Component.getLayout(<Component {...pageProps} />)
//   } else {
//     return (
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     )
//   }
// }

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
  return <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
}
