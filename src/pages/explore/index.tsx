import { Input } from '@/components/input'
import { Tag } from '@/components/tag'
import { UserMenu } from '@/components/UserMenu'
import React from 'react'
import {
  BooksContainer,
  CategoriesContainer,
  ExploreContainer,
  ExploreContent,
  ExploreIcon,
  ExploreLabelContainer,
  ExploreSearchContainer,
  ExploreSection,
  MenuSection,
} from './styles'
import { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'
import { BookEvaluationData } from '../home/_components/popularBooksSection'
import { SmallCard } from '@/components/smallCard'

enum BookCategory {
  ALL = 'Todos',
  COMPUTING = 'Programação',
  EDUCATION = 'Educação',
  FANTASY = 'Fábula',
  SCI_FI = 'Ficção',
  HORROR = 'Terror',
  GEEK = 'Geek',
  SUSPENSE = 'Suspense',
}

export default function Explore({
  bookEvaluationsData,
}: {
  bookEvaluationsData: BookEvaluationData[]
}) {
  return (
    <ExploreContainer>
      <MenuSection>
        <UserMenu />
      </MenuSection>
      <ExploreSection>
        <ExploreContent>
          <ExploreSearchContainer>
            <ExploreLabelContainer>
              <ExploreIcon />
              <h2>Explorar</h2>
            </ExploreLabelContainer>
            <Input placeholder="Buscar livro ou autor" />
          </ExploreSearchContainer>
          <CategoriesContainer>
            {Object.values(BookCategory).map((category) => (
              <Tag name={category} key={category} />
            ))}
          </CategoriesContainer>
          <BooksContainer>
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
          </BooksContainer>
        </ExploreContent>
      </ExploreSection>
    </ExploreContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const booksWithAvg = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
    orderBy: {
      _avg: {
        rate: 'desc',
      },
    },
  })

  const bookIds = booksWithAvg.map((book) => book.book_id)

  const books = await prisma.book.findMany({
    where: {
      id: {
        in: bookIds,
      },
    },
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
    },
  })

  const sortedBooks = booksWithAvg.map((bookWithAvg) => {
    const book = books.find((bookItem) => bookItem.id === bookWithAvg.book_id)

    return {
      ...book,
      coverUrl: book?.cover_url.slice(6) || '',
      avgRate: booksWithAvg.find(
        (bookWithAvg) => book?.id === bookWithAvg.book_id,
      )?._avg.rate,
    }
  })

  return {
    props: {
      bookEvaluationsData: sortedBooks,
    },
  }
}
