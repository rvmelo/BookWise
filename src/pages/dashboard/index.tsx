import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { DashboardContainer, FeedGird, MenuGrid, PopularGrid } from './styles'
import { UserMenu } from '@/components/UserMenu'
import { BookData, FeedSection } from './_components/feedSection'
import {
  BookEvaluationData,
  PopularBooksSection,
} from './_components/popularBooksSection'
import { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'

export default function Dashboard({
  booksData,
  bookEvaluationsData,
}: {
  booksData: BookData[]
  bookEvaluationsData: BookEvaluationData[]
}) {
  const session = useSession()

  useEffect(() => {
    console.log(session)
  }, [session])

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

  const bookEvaluations = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      ratings: {
        select: {
          id: true,
          rate: true,
        },
      },
    },
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    take: 4,
  })

  const formattedBookEvaluations = bookEvaluations.map((bookEvaluation) => {
    const avgRate =
      bookEvaluation.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
      bookEvaluation.ratings.length

    return {
      ...bookEvaluation,
      coverUrl: bookEvaluation.cover_url.slice(6) || '',
      avgRate,
    }
  })

  return {
    props: {
      booksData: formattedBooksData,
      bookEvaluationsData: formattedBookEvaluations,
    },
  }
}
