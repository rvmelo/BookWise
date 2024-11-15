import React from 'react'
import {
  AvatarBorder,
  AvatarWrapper,
  UserDataContainer,
  UserInfoContainer,
} from './styles'

import Image from 'next/image'

interface AuthenticatedInfoProps {
  userName?: string
  userAvatarUrl?: string
}

export const LoggedInInfo: React.FC<AuthenticatedInfoProps> = ({
  userName,
  userAvatarUrl,
}) => {
  return (
    <UserDataContainer>
      {userAvatarUrl && (
        <AvatarBorder>
          <AvatarWrapper>
            {userAvatarUrl && (
              <Image src={userAvatarUrl} alt="" width={32} height={32} />
            )}
          </AvatarWrapper>
        </AvatarBorder>
      )}
      <UserInfoContainer>
        <h2>{userName}</h2>
        <span>Hoje</span>
      </UserInfoContainer>
    </UserDataContainer>
  )
}
