import { X } from '@phosphor-icons/react'
import React from 'react'
import { CloseButtonContainer } from './styles'

interface CloseButtonProps {
  onClick: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <CloseButtonContainer onClick={onClick}>
      <X size={24} />
    </CloseButtonContainer>
  )
}
