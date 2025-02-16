import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from '@phosphor-icons/react'
import React from 'react'
import {
  AdditionalInfoContainer,
  AvatarBorder,
  AvatarWrapper,
  DetailsWrapper,
  InfoTextWrapper,
  ItemContainer,
  Separator,
  TopInfo,
  UserInfoContainer,
} from './styles'
import Image from 'next/image'
import { User } from '@prisma/client'
import { theme } from '@/styles/stitches.config'

const additionalInfo = [
  {
    id: 1,
    Icon: BookOpen,
    amount: 3853,
    label: 'Páginas lidas',
  },
  {
    id: 2,
    Icon: Books,
    amount: 0,
    label: 'Livros avaliados',
  },
  {
    id: 3,
    Icon: UserList,
    amount: 8,
    label: 'Autores lidos',
  },
  {
    id: 4,
    Icon: BookmarkSimple,
    category: 'Computação',
    label: 'Categoria mais lida',
  },
]

interface UserInfoSectionProps {
  user: Pick<User, 'name' | 'avatar_url' | 'created_at'>
  ratingsAmount: number
}

export const UserInfoSection: React.FC<UserInfoSectionProps> = ({
  user,
  ratingsAmount,
}) => {
  return (
    <UserInfoContainer>
      <TopInfo>
        <AvatarBorder>
          <AvatarWrapper>
            {user.avatar_url && (
              <Image src={user.avatar_url} alt="" width={72} height={72} />
            )}
          </AvatarWrapper>
        </AvatarBorder>

        <InfoTextWrapper>
          <h2>{user.name}</h2>
          <span>membro desde {new Date(user.created_at).getFullYear()}</span>
        </InfoTextWrapper>
      </TopInfo>
      <Separator />
      <AdditionalInfoContainer>
        {additionalInfo.map((info) => {
          const { id, Icon, label, category, amount } = info || {}

          const selectedAmount = id === 2 ? ratingsAmount : amount

          return (
            <ItemContainer key={id}>
              <Icon size={32} color={theme.colors.green100.value} />
              <DetailsWrapper>
                {selectedAmount !== undefined && <h2>{selectedAmount}</h2>}
                {category && <h2>{category}</h2>}
                <span>{label}</span>
              </DetailsWrapper>
            </ItemContainer>
          )
        })}
      </AdditionalInfoContainer>
    </UserInfoContainer>
  )
}
