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
  createdAt?: string | Date
}

export const UserInfo: React.FC<AuthenticatedInfoProps> = ({
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
              <Image src={userAvatarUrl} alt="" width={40} height={40} />
            )}
          </AvatarWrapper>
        </AvatarBorder>
      )}
      <UserInfoContainer>
        <h2>{userName}</h2>
        {createdAt && <span>{formatTimeUntilNow(createdAt)}</span>}
      </UserInfoContainer>
    </UserDataContainer>
  )
}
