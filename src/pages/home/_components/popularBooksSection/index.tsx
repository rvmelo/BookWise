import React from 'react'
import Link from 'next/link'
import { SmallCard } from '@/components/smallCard'
import {
  ArrowRightIcon,
  HeaderContainer,
  PopularBooksContainer,
  PopularBooksSectionContainer,
} from './styles'
import { Book, Rating } from '@prisma/client'

export type BookEvaluationData = Pick<Book, 'id' | 'name' | 'author'> & {
  ratings: Pick<Rating, 'id'>[]
} & { coverUrl: string; avgRate: number }

export const PopularBooksSection: React.FC<{
  bookEvaluationsData: BookEvaluationData[]
}> = ({ bookEvaluationsData }) => {
  return (
    <PopularBooksSectionContainer>
      <HeaderContainer>
        <span>Livros populares</span>
        <Link href="/explore">
          Ver todas <ArrowRightIcon />
        </Link>
      </HeaderContainer>
      <PopularBooksContainer>
        {bookEvaluationsData.map((bookEvaluation) => {
          return (
            <SmallCard
              key={bookEvaluation.id}
              rate={bookEvaluation.avgRate}
              name={bookEvaluation.name}
              author={bookEvaluation.author}
              coverUrl={bookEvaluation.coverUrl}
            />
          )
        })}
      </PopularBooksContainer>
    </PopularBooksSectionContainer>
  )
}
