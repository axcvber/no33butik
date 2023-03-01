import AuthCard from '@/components/cards/AuthCard'
import LoginForm from '@/components/auth/LoginForm'
import NextImage from '@/components/layout/NextImage'
import AuthPageLayout from '@/layouts/AuthPageLayout'
import { useRouter } from 'next/router'
import React from 'react'
import { RouteNames } from '@/routes'

const LoginPage = () => {
  const rounter = useRouter()

  const pushToSignUp = () => {
    rounter.push(RouteNames.AUTH.REGISTRATION)
  }

  const pushToRecoverPass = () => {
    rounter.push(RouteNames.AUTH.PASSWORD_RESET)
  }

  return (
    <AuthCard title='Welcome Back' desc='Please log-in to continue.'>
      <LoginForm signUpCallback={pushToSignUp} recoverPassCallback={pushToRecoverPass} />
    </AuthCard>
  )
}

LoginPage.getLayout = AuthPageLayout

export default LoginPage
