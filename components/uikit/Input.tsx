import React from 'react'

type Props<T> = {
  label: string
  value: T
  setValue: (newValue: T)=> void
}

export const Input = ({label, value, setValue}: Props<number>) => {
  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(target.value ?? '0')
    setValue(Number.isNaN(value) ? 0 : value);
  }
  return <div>
    <label>{label}</label>
    <input type="number" value={value} onChange={handleChange}/>
  </div>
}