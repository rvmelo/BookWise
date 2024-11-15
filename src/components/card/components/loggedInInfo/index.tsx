import React from 'react'
import {
  AvatarBorder,
  AvatarWrapper,
  UserDataContainer,
  UserInfoContainer,
} from './styles'

import Image from 'next/image'
import { formatTimeUntilNow } from '@/utils/formatTimeUntilNow'

interface AuthenticatedInfoProps {
  userName?: string
  userAvatarUrl?: string
  createdAt: string | Date
}

export const LoggedInInfo: React.FC<AuthenticatedInfoProps> = ({
  userName,
  userAvatarUrl,
  createdAt,
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
        <span>{formatTimeUntilNow(createdAt)}</span>
      </UserInfoContainer>
    </UserDataContainer>
  )
}
