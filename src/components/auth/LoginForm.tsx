import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import DividerOr from '../form/common/DividerOr'
import Field from '../form/Field'
import Checkbox from '../form/Checkbox'
import { Form, useForm } from '../form/Form'
import Button from '../shared/Button'
import SocialButtons from './SocialButtons'
import { SignInFormInputs, SignInFormSchema } from '@/validation/schemas'

interface ILoginForm {
  recoverPassCallback: () => void
  signUpCallback: () => void
}

const LoginForm: React.FC<ILoginForm> = ({ signUpCallback, recoverPassCallback }) => {
  const form = useForm({
    schema: SignInFormSchema,
  })

  const {
    control,
    formState: { isSubmitting },
  } = form

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    console.log(data)
    // await signIn('credentials', {
    //   email: data.email,
    //   password: data.password,
    //   redirect: false,
    //   // callbackUrl: '/',
    // })
  }

  return (
    <div>
      <div className='flex flex-col gap-3'>
        <Form className='flex flex-col gap-4' form={form} onSubmit={onSubmit}>
          <Field name='email' control={control} placeholder={'Email address'} type='email' />
          <Field name='password' control={control} placeholder={'Password'} type='password' />
          <div className='flex justify-between'>
            <Checkbox name='rememberMe' control={control} label='Remember me' />

            <Button type='button' size='small' variant='link' color='secondary' onClick={recoverPassCallback}>
              Forgot Password?
            </Button>
          </div>
          <Button disabled={isSubmitting} fullWidth color='secondary' type='submit'>
            Sign In
          </Button>
        </Form>

        <DividerOr />

        <SocialButtons />
      </div>
      <div className='flex justify-center items-center gap-1.5 text-sm mt-5'>
        <span className='text-text'>Not a member?</span>
        <Button variant='link' color='secondary' onClick={signUpCallback}>
          Join Us.
        </Button>
      </div>
      <hr className='my-3' />
      <p className='text-xs text-center  text-text'>
        By logging in, you agree to No33butik Privacy Policy and Terms of Use.
      </p>
    </div>
  )
}

export default LoginForm
