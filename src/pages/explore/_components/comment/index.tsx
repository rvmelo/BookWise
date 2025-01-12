import { UserInfo } from '@/components/card/components/userInfo'
import React from 'react'
import { CommentContainer, Header, StarsContainer, StyledStar } from './styles'

interface CommentProps {
  userName: string
  createdAt: Date
  userAvatarUrl?: string
  rateLimit?: number
  description: string
  rate: number
}

export const Comment: React.FC<CommentProps> = ({
  userName,
  createdAt,
  userAvatarUrl,
  description,
  rate,
  rateLimit = 5,
}) => {
  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  return (
    <CommentContainer>
      <Header>
        <UserInfo
          userName={userName}
          createdAt={createdAt}
          userAvatarUrl={userAvatarUrl}
        />
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
