import { UserInfo } from '@/components/card/components/userInfo'
import React from 'react'
import {
  CommentContainer,
  Header,
  StarsContainer,
  StyledStar,
  UserInfoWrapper,
} from './styles'
import { useRouter } from 'next/router'

interface CommentProps {
  userName: string
  createdAt: Date
  userAvatarUrl?: string
  userId: string
  rateLimit?: number
  description: string
  rate: number
}

export const Comment: React.FC<CommentProps> = ({
  userName,
  userId,
  createdAt,
  userAvatarUrl,
  description,
  rate,
  rateLimit = 5,
}) => {
  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  const router = useRouter()

  return (
    <CommentContainer>
      <Header>
        <UserInfoWrapper onClick={() => router.push(`/profile/${userId}`)}>
          <UserInfo
            userName={userName}
            createdAt={createdAt}
            userAvatarUrl={userAvatarUrl}
          />
        </UserInfoWrapper>

        <StarsContainer>
          {starsInfo.map((star, i) =>
            star ? (
              <StyledStar key={i} size={16} weight="fill" />
            ) : (
              <StyledStar key={i} size={16} />
            ),
          )}
        </StarsContainer>
      </Header>

      <p>{description}</p>
    </CommentContainer>
  )
}
