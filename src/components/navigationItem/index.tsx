import { Icon } from '@phosphor-icons/react'
import React from 'react'
import { ItemContent, NavigationItemContainer, SelectedBar } from './styles'

interface NavigationItemProps {
  Icon: Icon
  title: string
  isSelected?: boolean
  onClick: () => void
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  Icon,
  title,
  isSelected = false,
  onClick,
}) => {
  return (
    <NavigationItemContainer onClick={() => onClick()}>
      <SelectedBar isSelected={isSelected} />
      <ItemContent isSelected={isSelected}>
        <Icon size={24} />
        <span>{title}</span>
      </ItemContent>
    </NavigationItemContainer>
  )
}
