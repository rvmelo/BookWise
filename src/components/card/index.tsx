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

interface CardProps {
  rate: number
  rateLimit?: number
  bookName: string
  bookSummary: string
  author: string
  coverUrl: string
  userName?: string
  userAvatarUrl?: string
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
            {!shouldDisplayAdditionalInfo && <span>Hoje</span>}
            {shouldDisplayAdditionalInfo && (
              <LoggedInInfo userName={userName} userAvatarUrl={userAvatarUrl} />
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
          <p>{bookSummary}</p>
        </BottomSection>
      </InfoContainer>
    </CardContainer>
  )
}
