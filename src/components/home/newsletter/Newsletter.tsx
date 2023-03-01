import Button from '@/components/shared/Button'
import React from 'react'
import Checkbox from '@/components/form/Checkbox'
import { IoMail } from 'react-icons/io5'
import NextImage from '@/components/layout/NextImage'
import Heading from '@/components/shared/Heading'
import BaseInput from '@/components/shared/BaseInput'
import { IoMdMail } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    email: yup.string().email('Incorrect Email').max(30, 'Enter correct email').required(),
    // age: yup.number().positive().integer().required(),
  })
  .required()
type FormData = yup.InferType<typeof schema>

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <section className='container max-w-7xl'>
      <div className='w-full min-h-[300px] relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center'>
        <div className='max-w-lg w-full p-6 text-white text-center'>
          <Heading as='h3' title='E - bültene kayit ol' color='light' />
          <p>E-Bültene kayıt ol fırsat & indirimleri kaçırma!</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col sm:flex-row gap-2 w-full my-2 items-start'>
              <BaseInput
                {...register('email')}
                startIcon={<IoMdMail />}
                placeholder='Your e-mail address...'
                error={!!errors.email}
                errorText={errors.email?.message}
                color='primary'
              />
              <Button
                type='submit'
                // size='small'
                // rounded
                // variant='outlined'
                // startIcon={<IoMail fontSize={20} />}
              >
                Subscribe
              </Button>
            </div>

            {/* <Checkbox label="KVKK Aydınlatma Metni'ni okudum ve onaylıyorum." /> */}
          </form>
        </div>

        <div className='w-full h-full absolute top-0 left-0 -z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(255,154,102,0.6)] after:brightness-75 after:backdrop-blur-sm'>
          <NextImage
            fill
            src={'https://res.cloudinary.com/da7mdxekb/image/upload/v1676040816/Rectangle_19_zoprg7.jpg'}
            alt='bg'
            quality={100}
            sizes='100vw'
            className='object-cover'
          />
        </div>
      </div>
    </section>

    // <div className="container max-w-7xl p-0 shadow-lg overflow-hidden relative after:bg-[rgba(255,154,102,0.6)] after:w-full after:h-full after:absolute after:top-0 after:right-0 bg-no-repeat bg-center h-[300px] bg-[url('https://res.cloudinary.com/da7mdxekb/image/upload/v1676040816/Rectangle_19_zoprg7.jpg')] rounded-xl">
    //   <div className='relative gap-2 z-10 text-white flex justify-center flex-col items-center w-full h-full backdrop-blur-sm p-10'>
    //     <h3 className='text-3xl font-bold font-display uppercase'>E - bültene kayit ol</h3>
    //     <p>E-Bültene kayıt ol fırsat & indirimleri kaçırma!</p>
    //     <div className='flex gap-3'>
    //       <Input />
    //       <Button
    //         // size='small'
    //         // rounded
    //         // variant='outlined'
    //         color='secondary'
    //         startIcon={<IoMail fontSize={20} />}
    //       >
    //         Gönder
    //       </Button>
    //     </div>
    //     <Checkbox label="KVKK Aydınlatma Metni'ni okudum ve onaylıyorum." />
    //     {/* <span>
    //       KVKK Aydınlatma Metni'ni okudum ve onaylıyorum. Kampanya, ürün ve yeniliklerden haberdar edilmek için tarafıma
    //       e-posta gönderilmesine açık rızamla izin veriyorum.
    //     </span> */}
    //   </div>
    // </div>
  )
}

export default Newsletter
