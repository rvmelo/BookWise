import React from 'react'
import {
  AvatarBorder,
  AvatarWrapper,
  ContentSection,
  AuthButton,
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
import {
  NavigationPages,
  useStateNavigation,
} from '@/contexts/navigationStateProvider'
import { useRouter } from 'next/router'
import { useModalProvider } from '@/contexts/modalProvider'

export const UserMenu: React.FC = () => {
  const { data } = useSession()

  const { user } = data || {}

  const router = useRouter()

  const { setCurrentPage, currentPage } = useStateNavigation()

  const handleNavigation = (page: NavigationPages) => {
    setCurrentPage(page)
    router.push(page)
  }

  const { onLoginModalCall } = useModalProvider()

  return (
    <UserMenuContainer>
      <ContentSection>
        <TitleContainer>
          <Image src={book} alt="" width={24} height={24} />
          <h2>BookWise</h2>
        </TitleContainer>
        <NavigationMenuContainer>
          <NavigationItem
            title="Início"
            Icon={ChartLineUp}
            onClick={() => handleNavigation(NavigationPages.HOME)}
            isSelected={currentPage === NavigationPages.HOME}
          />
          <NavigationItem
            title="Explorar"
            Icon={Binoculars}
            onClick={() => handleNavigation(NavigationPages.EXPLORE)}
            isSelected={currentPage === NavigationPages.EXPLORE}
          />
          {user?.name && (
            <NavigationItem
              title="Perfil"
              Icon={User}
              onClick={() => handleNavigation(NavigationPages.PROFILE)}
              isSelected={currentPage === NavigationPages.PROFILE}
            />
          )}
        </NavigationMenuContainer>
      </ContentSection>
      {user?.name && (
        <AuthButton onClick={() => signOut({ callbackUrl: '/' })}>
          <AvatarBorder>
            <AvatarWrapper>
              {user?.image && (
                <Image src={user.image} alt="" width={32} height={32} />
              )}
            </AvatarWrapper>
          </AvatarBorder>

          <span>{user?.name?.split(' ')[0]}</span>
          <SignOutIcon isLoggedIn={true} />
        </AuthButton>
      )}
      {!user?.name && (
        <AuthButton onClick={onLoginModalCall}>
          <span>Fazer login</span>
          <SignOutIcon isLoggedIn={false} />
        </AuthButton>
      )}
    </UserMenuContainer>
  )
}
