import React from 'react'
import Image from 'next/image'
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
  name: string
  author: string
  coverUrl?: string
}

export const SmallCard: React.FC<SmallCardProps> = ({
  rate,
  rateLimit = 5,
  name,
  author,
  coverUrl,
}) => {
  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  return (
    <SmallCardContainer>
      {coverUrl && <Image src={coverUrl} width={64} height={94} alt="" />}
      <ContentContainer>
        <InfoCOntainer>
          {name.length > 34 ? <h2>{name.slice(0, 34)}...</h2> : <h2>{name}</h2>}
          <span>{author}</span>
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
