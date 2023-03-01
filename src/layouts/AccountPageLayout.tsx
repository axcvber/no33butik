import AccountSidebar from '@/components/account/AccountSidebar'
import Layout from '@/components/layout/Layout'
import { ReactNode } from 'react'

export const AccountPageLayout = (page: ReactNode) => {
  return (
    <Layout>
      <div className='container max-w-screen-xl flex items-start mt-10 mb-20 gap-20'>
        <AccountSidebar />
        <main className='flex-1'>{page}</main>
      </div>
    </Layout>
  )
}
