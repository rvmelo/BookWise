import React from 'react'
import {
  BookInfoContainer,
  CardWrapper,
  EvaluationTextContainer,
  InfoContainer,
  ProfileCardContainer,
  StarsContainer,
  StyledStar,
  TextWrapper,
} from './styles'
import { formatTimeUntilNow } from '@/utils/formatTimeUntilNow'
import Image from 'next/image'
import { Book, Rating } from '@prisma/client'

export type RatingData = Pick<Rating, 'id' | 'rate' | 'description'> & {
  created_at: string
} & {
  book: Pick<Book, 'name' | 'author' | 'cover_url'>
}

interface ProfileFeedCardProps {
  rate: number
  createdAt: string
  description: string
  book: Pick<Book, 'name' | 'author' | 'cover_url'>
}

export const ProfileFeedCard: React.FC<ProfileFeedCardProps> = ({
  book,
  rate,
  description,
  createdAt,
}) => {
  const starsArray = Array.from({ length: 5 })
  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  return (
    <CardWrapper>
      <span>{formatTimeUntilNow(createdAt)}</span>
      <ProfileCardContainer>
        <BookInfoContainer>
          <Image src={book.cover_url} width={98} height={134} alt="" />
          <InfoContainer>
            <TextWrapper>
              <h2>{book.name}</h2>
              <span>{book.author}</span>
            </TextWrapper>
            <StarsContainer>
              {starsInfo.map((star, i) =>
                star ? (
                  <StyledStar key={i} size={16} weight="fill" />
                ) : (
                  <StyledStar key={i} size={16} />
                ),
              )}
            </StarsContainer>
          </InfoContainer>
        </BookInfoContainer>
        <EvaluationTextContainer>
          <p>{description}</p>
        </EvaluationTextContainer>
      </ProfileCardContainer>
    </CardWrapper>
  )
}
