import React from 'react'
import Image from 'next/image'
import {
  BottomSection,
  CardContainer,
  Header,
  InfoContainer,
  StarsContainer,
  StyledStar,
  TitleContainer,
  TopSection,
} from './styles'
import { useSession } from 'next-auth/react'
import { LoggedInInfo } from './components/loggedInInfo'
import { formatTimeUntilNow } from '@/utils/formatTimeUntilNow'
import Link from 'next/link'

interface CardProps {
  rate: number
  rateLimit?: number
  bookName: string
  bookSummary: string
  author: string
  coverUrl: string
  userName?: string
  userAvatarUrl?: string
  createdAt: string | Date
}

export const Card: React.FC<CardProps> = ({
  rate,
  rateLimit = 5,
  bookName,
  bookSummary,
  author,
  coverUrl,
  userName,
  userAvatarUrl,
  createdAt,
}) => {
  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  const session = useSession()

  const shouldDisplayAdditionalInfo =
    session.status === 'authenticated' && userName

  return (
    <CardContainer>
      <Image src={coverUrl} width={108} height={152} alt="" />
      <InfoContainer>
        <TopSection>
          <Header>
            {!shouldDisplayAdditionalInfo && (
              <span>{formatTimeUntilNow(createdAt)}</span>
            )}
            {shouldDisplayAdditionalInfo && (
              <LoggedInInfo
                userName={userName}
                userAvatarUrl={userAvatarUrl}
                createdAt={createdAt}
              />
            )}
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
          <TitleContainer>
            <h2>{bookName}</h2>
            <span>{author}</span>
          </TitleContainer>
        </TopSection>
        <BottomSection>
          {bookSummary.length > 231 ? (
            <p>
              {bookSummary.slice(0, 231)}...<Link href="/"> Ver mais</Link>
            </p>
          ) : (
            <p>{bookSummary}</p>
          )}
        </BottomSection>
      </InfoContainer>
    </CardContainer>
  )
}
