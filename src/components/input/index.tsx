import React, { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isActive?: boolean
  isUnlimitedWidth?: boolean
}

export const Input: React.FC<InputProps> = ({
  isActive = false,
  isUnlimitedWidth = false,
  ...props
}) => {
  return (
    <InputContainer isActive={isActive} isUnlimitedWidth={isUnlimitedWidth}>
      <input {...props} />
      <MagnifyingGlass size={20} />
    </InputContainer>
  )
}
