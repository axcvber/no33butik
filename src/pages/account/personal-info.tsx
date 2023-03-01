import React from 'react'
import { Form, useForm } from '@/components/form/Form'
import { AccountPageLayout } from '@/layouts/AccountPageLayout'
import { PersonalInfoFormSchema, PersonalInfoInputs } from '@/validation/schemas'
import { SubmitHandler } from 'react-hook-form'
import Field from '@/components/form/Field'
import Button from '@/components/shared/Button'
import Heading from '@/components/shared/Heading'
import Label from '@/components/shared/Label'
import BaseInput from '@/components/shared/BaseInput'

const PersonalInfoPage = () => {
  const form = useForm({
    schema: PersonalInfoFormSchema,
  })

  const {
    control,
    formState: { isSubmitting },
  } = form

  const onSubmit: SubmitHandler<PersonalInfoInputs> = async (data) => {
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
      <div className='flex justify-between items-center'>
        <Heading title='Personal Info' className='mb-4' />
        <Button disabled={isSubmitting} color='secondary' type='submit'>
          Save
        </Button>
      </div>

      <Form form={form} onSubmit={onSubmit}>
        <div className='grid grid-cols-2 gap-6'>
          <div className='grid gap-6'>
            <Field defaultValue={'Alex'} name='firstName' control={control} label='First Name' />
            <Field defaultValue={'Cyber'} name='lastName' control={control} label={'Last Name'} />
            <Field defaultValue={'20.06.2001'} name='dateOfBirth' control={control} label={'Date Of Birth'} />
          </div>
          <div className='grid gap-6'>
            <Field
              defaultValue={'cjmc0675@gmail.com'}
              name='email'
              control={control}
              label={'Email address'}
              type='email'
            />
            <div>
              <Label label='Password' />
              {/* <BaseInput value={'••••••••••••••••'} /> */}
              <div className='flex justify-between items-center text-lg font-bold'>
                <span>••••••••••••••••</span>
                <Button variant='link' color='secondary'>
                  Edit
                </Button>
              </div>
            </div>
            <div>
              <Label label='Phone Number' />
              <div className='flex justify-between items-center font-medium text-secondary'>
                <span>+380981225917</span>
                <Button variant='link' color='secondary'>
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* <hr className='my-6' /> */}

        {/* <Heading title='Location' className='text-lg py-4' /> */}
        <div className='grid grid-cols-2 gap-4 py-8'>
          <Field name='country' control={control} label={'Country'} />
          <div className='grid grid-cols-2 gap-4'>
            <Field name='city' control={control} label={'City'} />
            <Field name='postcode' control={control} label={'Post Code'} />
          </div>
        </div>
      </Form>
      <Button variant='outlined' color='error'>
        Delete Account
      </Button>
    </div>
  )
}

PersonalInfoPage.getLayout = AccountPageLayout

export default PersonalInfoPage
