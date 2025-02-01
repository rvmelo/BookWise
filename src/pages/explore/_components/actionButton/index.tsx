import { Check, X } from '@phosphor-icons/react'
import React from 'react'
import { ActionButtonContainer } from './styles'

interface CloseButtonProps {
  onClick: () => void
  type: 'accept' | 'deny'
}

export const ActionButton: React.FC<CloseButtonProps> = ({ onClick, type }) => {
  return (
    <ActionButtonContainer onClick={onClick}>
      {type === 'accept' ? (
        <Check color="#50B2C0" size={24} />
      ) : (
        <X color="#8381D9" size={24} />
      )}
    </ActionButtonContainer>
  )
}
