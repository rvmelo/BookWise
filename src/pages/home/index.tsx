import { DashboardContainer, FeedGird, MenuGrid, PopularGrid } from './styles'
import { UserMenu } from '@/components/UserMenu'
import { BookData, FeedSection } from './_components/feedSection'
import {
  BookEvaluationData,
  PopularBooksSection,
} from './_components/popularBooksSection'
import { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'

export default function Home({
  booksData,
  bookEvaluationsData,
}: {
  booksData: BookData[]
  bookEvaluationsData: BookEvaluationData[]
}) {
  return (
    <DashboardContainer>
      <MenuGrid>
        <UserMenu />
      </MenuGrid>
      <FeedGird>
        <FeedSection booksData={booksData} />
      </FeedGird>
      <PopularGrid>
        <PopularBooksSection bookEvaluationsData={bookEvaluationsData} />
      </PopularGrid>
    </DashboardContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const booksData = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    select: {
      id: true,
      rate: true,
      created_at: true,
      user: {
        select: {
          id: true,
          name: true,
          avatar_url: true,
        },
      },
      book: {
        select: {
          name: true,
          summary: true,
          author: true,
          cover_url: true,
        },
      },
    },
  })

  const formattedBooksData = booksData.map((bookData) => {
    const newBooksData = {
      ...bookData,
      created_at: bookData.created_at.toISOString(),
      user: {
        ...bookData.user,
        avatarUrl: bookData.user.avatar_url,
      },
      book: {
        ...bookData.book,
        coverUrl: bookData.book.cover_url.slice(6) || '',
      },
    }

    return newBooksData
  })

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
    take: 4,
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
      booksData: formattedBooksData,
      bookEvaluationsData: sortedBooks,
    },
  }
}
