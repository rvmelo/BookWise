import React from 'react'
import { MenuGrid, ProfileContainer } from './styles'
import { UserMenu } from '@/components/UserMenu'

export default function Profile() {
  return (
    <ProfileContainer>
      <MenuGrid>
        <UserMenu />
      </MenuGrid>
    </ProfileContainer>
  )
}
