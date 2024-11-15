import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/card'
import {
  ArrowRightIcon,
  ChartIcon,
  EvaluationContainer,
  FeedSectionContainer,
  LastReadingContainer,
  LastReadingHeader,
  RecentEvaluationContainer,
  TitleContainer,
} from './styles'
import { Book, User } from '@prisma/client'

export interface BookData {
  book: Omit<Book, 'cover_url'> & { coverUrl: string }
  user: Pick<User, 'name'> & { avatarUrl: string }
  created_at: string
  rate: number
  id: string
}

export const FeedSection: React.FC<{ booksData: BookData[] }> = ({
  booksData,
}) => {
  return (
    <FeedSectionContainer>
      <TitleContainer>
        <ChartIcon />
        <h2>Início</h2>
      </TitleContainer>
      <LastReadingContainer>
        <LastReadingHeader>
          <span>Sua última leitura</span>
          <Link href="/">
            Ver todas <ArrowRightIcon />
          </Link>
        </LastReadingHeader>
        <Card
          rate={4}
          bookName="Entendendo Algoritmos"
          bookSummary="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
          author="Aditya Y. Bhargava"
          coverUrl="/images/books/entendendo-algoritmos.jpg"
          createdAt={new Date()}
        />
      </LastReadingContainer>
      <RecentEvaluationContainer>
        <span>Avaliações mais recentes</span>
        <EvaluationContainer>
          {booksData.map((bookData) => {
            const { name, summary, author, coverUrl } = bookData.book || {}
            const { name: userName, avatarUrl } = bookData.user || {}

            return (
              <Card
                key={bookData.id}
                rate={Number(bookData.rate)}
                bookName={name}
                bookSummary={summary}
                author={author}
                coverUrl={coverUrl}
                userName={userName}
                userAvatarUrl={avatarUrl}
                createdAt={bookData.created_at}
              />
            )
          })}
        </EvaluationContainer>
      </RecentEvaluationContainer>
    </FeedSectionContainer>
  )
}
