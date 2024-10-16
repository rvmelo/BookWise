import React from 'react'
import { LinkButtonContainer } from './styles'
import { CaretRight } from '@phosphor-icons/react'

interface LinkButtonProps {
  size?: 'medium' | 'small'
  color?: 'purple' | 'white'
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  size = 'medium',
  color = 'white',
}) => {
  return (
    <LinkButtonContainer
      as="a"
      href="https://github.com/rvmelo"
      maxWidth={size}
      color={color}
    >
      <CaretRight size={size === 'medium' ? 20 : 16} />
      <span>Link</span>
      <CaretRight size={size === 'medium' ? 20 : 16} />
    </LinkButtonContainer>
  )
}
