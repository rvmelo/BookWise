import React from 'react'
import Image from 'next/image'
import {
  BottomSection,
  BottomSectionTextContent,
  CardContainer,
  Header,
  StarsContainer,
  StyledStar,
  TimeDisplayWrapper,
  TitleContainer,
} from './styles'
import { UserInfo } from './components/userInfo'
import { formatTimeUntilNow } from '@/utils/formatTimeUntilNow'
import Link from 'next/link'
import { useRouter } from 'next/router'

type BookData = {
  name: string
  summary: string
  author: string
  coverUrl: string
}

type UserData = {
  id: string
  name: string
  avatarUrl?: string
}

interface CardProps {
  rate: number
  rateLimit?: number
  book: BookData
  user?: UserData
  createdAt: string | Date
}

export const Card: React.FC<CardProps> = ({
  rate,
  rateLimit = 5,
  book,
  user,
  createdAt,
}) => {
  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  const shouldDisplayHeader = !!user

  const router = useRouter()

  const handleNavigation = () => {
    if (!user?.id) {
      return
    }

    router.push(`/profile/${user?.id}`)
  }

  return (
    <CardContainer
      shouldDisplayHeader={shouldDisplayHeader}
      onClick={handleNavigation}
    >
      {shouldDisplayHeader && (
        <Header>
          <UserInfo
            userName={user.name}
            userAvatarUrl={user.avatarUrl}
            createdAt={createdAt}
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
      )}
      <BottomSection>
        <Image src={book.coverUrl} width={108} height={152} alt="" />
        <BottomSectionTextContent>
          <TitleContainer>
            {!shouldDisplayHeader && (
              <TimeDisplayWrapper>
                <time>{formatTimeUntilNow(new Date())}</time>
              </TimeDisplayWrapper>
            )}

            <h2>{book.name}</h2>
            <span>{book.author}</span>
          </TitleContainer>
          {book.summary.length > 231 ? (
            <p>
              {book.summary.slice(0, 231)}...<Link href="/"> Ver mais</Link>
            </p>
          ) : (
            <p>{book.summary}</p>
          )}
        </BottomSectionTextContent>
      </BottomSection>
    </CardContainer>
  )
}
