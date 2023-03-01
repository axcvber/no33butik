import RegisterForm from '@/components/auth/RegisterForm'
import AuthCard from '@/components/cards/AuthCard'
import AuthPageLayout from '@/layouts/AuthPageLayout'
import { RouteNames } from '@/routes'
import { useRouter } from 'next/router'
import React from 'react'

const RegistrationPage = () => {
  const rounter = useRouter()

  const pushToSignIn = () => {
    rounter.push(RouteNames.AUTH.LOGIN)
  }

  return (
    <AuthCard
      title='Become a member'
      desc='Create your profile and get first access to the very best of No33butik products.'
    >
      <RegisterForm signInCallback={pushToSignIn} />
    </AuthCard>
  )
}

RegistrationPage.getLayout = AuthPageLayout

export default RegistrationPage
