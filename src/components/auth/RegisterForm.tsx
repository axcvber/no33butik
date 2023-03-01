import React from 'react'
import Field from '../form/Field'
import PasswordField from '../form/PasswordField'
import { SubmitHandler } from 'react-hook-form'
import Button from '../shared/Button'
import DividerOr from '../form/common/DividerOr'
import SocialButtons from './SocialButtons'
import { Form, useForm } from '../form/Form'
import { SignUpFormInputs, SignUpFormSchema } from '@/validation/schemas'
import Checkbox from '../form/Checkbox'

interface IRegisterForm {
  signInCallback: () => void
}

const RegisterForm: React.FC<IRegisterForm> = ({ signInCallback }) => {
  const form = useForm({
    schema: SignUpFormSchema,
  })

  const {
    control,
    formState: { isSubmitting },
  } = form

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    console.log(data)
    // const response = await customerSignup({
    //   config,
    //   variables: {
    //     email: data.email,
    //     password: data.password,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //   },
    // })
    // console.log('response signUp', response)
  }

  return (
    <div>
      <div className='flex flex-col gap-3'>
        <Form className='flex flex-col gap-4' form={form} onSubmit={onSubmit}>
          <Field name='firstName' control={control} placeholder={'First Name'} />

          <Field name='lastName' control={control} placeholder={'Last Name'} />

          <Field name='email' control={control} placeholder={'Email address'} type='email' />

          <PasswordField name='password' control={control} placeholder={'Password'} />

          <Checkbox name='acceptsMarketing' control={control} label='Sign up for emails to get updates' />

          <Button disabled={isSubmitting} fullWidth color='secondary' type='submit'>
            Join Us
          </Button>
        </Form>

        <DividerOr />

        <SocialButtons />
      </div>

      <div className='flex justify-center items-center gap-1.5 text-sm mt-5'>
        <span className='text-text'>Already a Member?</span>
        <Button variant='link' color='secondary' onClick={signInCallback}>
          Sign In.
        </Button>
      </div>
      <hr className='my-3' />
      <p className='text-xs text-center  text-text'>
        By creating an account, you agree to No33butik Privacy Policy and Terms of Use.
      </p>
    </div>
  )
}

export default RegisterForm
