import React from 'react'
import Image from 'next/image'
import book from '../../../public/images/books/a-revolucao-dos-bixos.jpg'
import {
  ContentContainer,
  InfoCOntainer,
  SmallCardContainer,
  StarsContainer,
  StyledStar,
} from './styles'

interface SmallCardProps {
  rate: number
  rateLimit?: number
}

export const SmallCard: React.FC<SmallCardProps> = ({
  rate,
  rateLimit = 5,
}) => {
  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  return (
    <SmallCardContainer>
      <Image src={book} width={64} height={94} alt="" />
      <ContentContainer>
        <InfoCOntainer>
          <h2>A revolução dos bichos</h2>
          <span>George Orwell</span>
        </InfoCOntainer>
        <StarsContainer>
          {starsInfo.map((star, i) =>
            star ? (
              <StyledStar key={i} size={16} weight="fill" />
            ) : (
              <StyledStar key={i} size={16} />
            ),
          )}
        </StarsContainer>
      </ContentContainer>
    </SmallCardContainer>
  )
}
