import React from 'react'
import { TagContainer } from './styles'

interface TagProps {
  name: string
  isSelected?: boolean
}

export const Tag: React.FC<TagProps> = ({ name, isSelected = false }) => {
  return (
    <TagContainer isSelected={isSelected}>
      <span>{name}</span>
    </TagContainer>
  )
}
