import React from 'react'
import {
  AvatarBorder,
  AvatarWrapper,
  ContentSection,
  LogOutButton,
  NavigationMenuContainer,
  SignOutIcon,
  TitleContainer,
  UserMenuContainer,
} from './styles'
import { NavigationItem } from '../navigationItem'
import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'
import Image from 'next/image'

import book from '../../../public/svg/book.svg'
import { signOut, useSession } from 'next-auth/react'

export const UserMenu: React.FC = () => {
  const { data } = useSession()

  const { user } = data || {}

  return (
    <UserMenuContainer>
      <ContentSection>
        <TitleContainer>
          <Image src={book} alt="" width={24} height={24} />
          <h2>BookWise</h2>
        </TitleContainer>
        <NavigationMenuContainer>
          <NavigationItem title="Início" Icon={ChartLineUp} />
          <NavigationItem title="Explorar" Icon={Binoculars} />
          <NavigationItem title="Perfil" Icon={User} />
        </NavigationMenuContainer>
      </ContentSection>
      <LogOutButton onClick={() => signOut({ callbackUrl: '/' })}>
        <AvatarBorder>
          <AvatarWrapper>
            {user?.image && (
              <Image src={user.image} alt="" width={32} height={32} />
            )}
          </AvatarWrapper>
        </AvatarBorder>

        <span>{user?.name?.split(' ')[0]}</span>
        <SignOutIcon />
      </LogOutButton>
    </UserMenuContainer>
  )
}
