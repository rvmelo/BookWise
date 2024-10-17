import { Icon } from '@phosphor-icons/react'
import React from 'react'
import { ItemContent, NavigationItemContainer, SelectedBar } from './styles'

interface NavigationItemProps {
  Icon: Icon
  title: string
  isSelected?: boolean
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  Icon,
  title,
  isSelected = false,
}) => {
  return (
    <NavigationItemContainer>
      {isSelected && <SelectedBar />}
      <ItemContent isSelected={isSelected}>
        <Icon size={24} />
        <span>{title}</span>
      </ItemContent>
    </NavigationItemContainer>
  )
}
