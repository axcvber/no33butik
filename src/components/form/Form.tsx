import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ComponentProps } from 'react'
import {
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
  FormProvider,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form'
import { ZodSchema, TypeOf } from 'zod'

interface UseFormProps<T extends ZodSchema<any>> extends UseHookFormProps<TypeOf<T>> {
  schema: T
}

export const useForm = <T extends ZodSchema<any>>({ schema, ...formConfig }: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  })
}

interface FormProps<T extends FieldValues = any> extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
}

export const Form = <T extends FieldValues>({ form, onSubmit, children, ...props }: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  )
}
