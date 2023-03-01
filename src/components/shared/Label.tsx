import React from 'react'
import { clsx } from 'clsx'

interface ILabel {
  name?: string
  label: string
  className?: string
}

const Label: React.FC<ILabel> = ({ name, label, className }) => {
  return (
    <label htmlFor={name} className={clsx('block mb-1.5 text-sm font-medium text-gray-700', className)}>
      {label}
    </label>
  )
}
export default Label
