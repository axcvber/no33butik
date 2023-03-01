import RecoverPassForm from '@/components/auth/RecoverPassForm'
import AuthCard from '@/components/cards/AuthCard'
import AuthPageLayout from '@/layouts/AuthPageLayout'
import { RouteNames } from '@/routes'
import { useRouter } from 'next/router'
import React from 'react'

const PasswordResetPage = () => {
  const rounter = useRouter()

  const pushToSignIn = () => {
    rounter.push(RouteNames.AUTH.LOGIN)
  }

  return (
    <AuthCard title='Reset Password' desc='Enter your email to receive instructions on how to reset your password.'>
      <RecoverPassForm signInCallback={pushToSignIn} />
    </AuthCard>
  )
}

PasswordResetPage.getLayout = AuthPageLayout

export default PasswordResetPage
