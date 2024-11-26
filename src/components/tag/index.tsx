import React from 'react'
import { TagContainer } from './styles'

interface TagProps {
  name: string
  isSelected?: boolean
  onClick?: () => void
}

export const Tag: React.FC<TagProps> = ({
  name,
  isSelected = false,
  onClick,
}) => {
  return (
    <TagContainer isSelected={isSelected} onClick={onClick}>
      <span>{name}</span>
    </TagContainer>
  )
}
