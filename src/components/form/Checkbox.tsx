import React from 'react'
import BaseCheckbox, { IBaseCheckbox } from '../shared/BaseCheckbox'
import { Control, Controller } from 'react-hook-form'

type ICheckbox = {
  label: string
  name: string
  control: Control<any>
} & Omit<IBaseCheckbox, 'name'>

const Checkbox: React.FC<ICheckbox> = ({ label, name, control, ...props }) => {
  return (
    <Controller
      defaultValue={false}
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <BaseCheckbox {...field} id={name} label={label} checked={field.value === true} error={!!error} {...props} />
      )}
    />
  )
}

export default Checkbox
