import React from 'react'
import BaseInput, { IBaseInput } from '../shared/BaseInput'
import { Controller, Control } from 'react-hook-form'

export type IField = {
  name: string
  control: Control<any>
  defaultValue?: string
} & Omit<IBaseInput, 'name'>

const Field: React.FC<IField> = ({ name, control, defaultValue = '', ...props }) => {
  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <BaseInput {...field} id={name} error={!!error} errorText={error?.message} {...props} />
      )}
    />
  )
}

export default Field
