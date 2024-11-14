import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { DashboardContainer, FeedGird, MenuGrid, PopularGrid } from './styles'
import { UserMenu } from '@/components/UserMenu'
import { BookData, FeedSection } from './_components/feedSection'
import { PopularBooksSection } from './_components/popularBooksSection'
import { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'

export default function Dashboard({ booksData }: { booksData: BookData[] }) {
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
        <PopularBooksSection />
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
      book: {
        ...bookData.book,
        coverUrl: bookData.book.cover_url.slice(6) || '',
      },
    }

    return newBooksData
  })

  return {
    props: {
      booksData: formattedBooksData,
    },
  }
}
