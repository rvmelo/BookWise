import { X } from '@phosphor-icons/react'
import React from 'react'
import { CloseButtonContainer } from './styles'

interface CloseButtonProps {
  onClick: () => void
  position: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  position,
}) => {
  return (
    <CloseButtonContainer onClick={onClick} position={position}>
      <X size={24} />
    </CloseButtonContainer>
  )
}
