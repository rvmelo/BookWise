import React from 'react'
import { CloseButton } from '@/components/closeButton'
import Image from 'next/image'
import {
  BackDrop,
  BookBottomContainer,
  BookDataContainer,
  BookIcon,
  BookInfoWrapper,
  BookWrapper,
  BottomInfoContainer,
  InfoContainer,
  ModalBookContainer,
  SaveIcon,
  StarsContainer,
  StyledStar,
  TextInfoContainer,
  TopInfoContainer,
} from './styles'
import { BookData } from '@/services/getBookByIdService'

interface BookModalProps {
  visible: boolean
  rate: number
  book: BookData
  handleModalClose: () => void
}

export const BookModal: React.FC<BookModalProps> = ({
  visible,
  rate,
  book,
  handleModalClose,
}) => {
  const starsArray = Array.from({ length: 5 })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  return (
    <BackDrop visible={visible}>
      <ModalBookContainer>
        <CloseButton onClick={handleModalClose} position="topRight" />
        <BookWrapper>
          <BookDataContainer>
            <Image src={book?.cover_url} width={171.65} height={242} alt="" />
            <BookInfoWrapper>
              <TopInfoContainer>
                <h2>{book.name}</h2>
                <span>{book.author}</span>
              </TopInfoContainer>
              <BottomInfoContainer>
                <StarsContainer>
                  {starsInfo.map((star, i) =>
                    star ? (
                      <StyledStar key={i} size={16} weight="fill" />
                    ) : (
                      <StyledStar key={i} size={16} />
                    ),
                  )}
                </StarsContainer>
                <span>
                  {book.ratings.length}{' '}
                  {book.ratings.length === 1 ? 'avaliação' : 'avaliações'}
                </span>
              </BottomInfoContainer>
            </BookInfoWrapper>
          </BookDataContainer>
          <BookBottomContainer>
            <InfoContainer>
              <SaveIcon size={19} />
              <TextInfoContainer>
                <span>Categoria</span>
                <h2>
                  {book.categories
                    .map((item, index) => {
                      if (index === 0) {
                        return `${item.category.name[0].toUpperCase() + item.category.name.substring(1)}`
                      }

                      return `${item.category.name.toLowerCase()}`
                    })
                    .join(', ')}
                </h2>
              </TextInfoContainer>
            </InfoContainer>
            <InfoContainer>
              <BookIcon size={19} />
              <TextInfoContainer>
                <span>Páginas</span>
                <h2>160</h2>
              </TextInfoContainer>
            </InfoContainer>
          </BookBottomContainer>
        </BookWrapper>
      </ModalBookContainer>
    </BackDrop>
  )
}
