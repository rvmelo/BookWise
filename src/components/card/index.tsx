import React from 'react'
import Image from 'next/image'
import book from '../../../public/images/books/Book.png'
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

interface CardProps {
  rate: number
  rateLimit?: number
}

export const Card: React.FC<CardProps> = ({ rate, rateLimit = 5 }) => {
  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  return (
    <CardContainer>
      <Image className="closeImg" src={book} width={108} height={152} alt="" />
      <InfoContainer>
        <TopSection>
          <Header>
            <span>Hoje</span>
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
            <h2>Entendendo Algoritmos</h2>
            <span>Aditya Bhargava</span>
          </TitleContainer>
        </TopSection>
        <BottomSection>
          <p>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectu...
          </p>
        </BottomSection>
      </InfoContainer>
    </CardContainer>
  )
}
