import { Check, X } from '@phosphor-icons/react'
import React, { ButtonHTMLAttributes } from 'react'
import { ActionButtonContainer } from './styles'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  actionType: 'accept' | 'deny'
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  actionType,
  ...rest
}) => {
  return (
    <ActionButtonContainer {...rest} onClick={onClick}>
      {actionType === 'accept' ? (
        <Check color="#50B2C0" size={24} />
      ) : (
        <X color="#8381D9" size={24} />
      )}
    </ActionButtonContainer>
  )
}
