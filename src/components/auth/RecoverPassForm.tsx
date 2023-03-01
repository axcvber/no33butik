import { RecoverPassFormSchema, RecoverPassInputs } from '@/validation/schemas'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import Field from '../form/Field'
import { Form, useForm } from '../form/Form'
import Button from '../shared/Button'

interface IRecoverPassForm {
  signInCallback: () => void
}

const RecoverPassForm: React.FC<IRecoverPassForm> = ({ signInCallback }) => {
  const form = useForm({
    schema: RecoverPassFormSchema,
  })

  const {
    control,
    formState: { isSubmitting },
  } = form

  const onSubmit: SubmitHandler<RecoverPassInputs> = async (data) => {
    console.log('recover pass data', data)
  }

  return (
    <>
      <Form className='flex flex-col gap-4 w-full' form={form} onSubmit={onSubmit}>
        <Field name='email' control={control} placeholder={'Email address'} type='email' />

        <Button disabled={isSubmitting} fullWidth color='secondary' type='submit'>
          Reset
        </Button>
      </Form>

      <div className='flex justify-center items-center gap-1 text-sm mt-5'>
        <span className='text-text'>Or return to</span>
        <Button variant='link' color='secondary' onClick={signInCallback}>
          Log In.
        </Button>
      </div>
    </>
  )
}

export default RecoverPassForm
