import React from 'react'
import { FeedGird, MenuGrid, ProfileContainer } from './styles'
import { UserMenu } from '@/components/UserMenu'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
import { prisma } from '@/lib/prisma'
import { ProfileFeedSection } from './_components/profileFeedSection'
import { User } from '@prisma/client'
import { RatingData } from './_components/profileFeedCard'

interface EvaluationData {
  user: Pick<User, 'id' | 'name' | 'avatar_url' | 'created_at'>
  ratings: RatingData[]
}

export default function Profile({ ratings, user }: EvaluationData) {
  return (
    <ProfileContainer>
      <MenuGrid>
        <UserMenu />
      </MenuGrid>
      <FeedGird>
        <ProfileFeedSection ratings={ratings} userId={user.id} />
      </FeedGird>
    </ProfileContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  const { user } = session || {}

  const foundUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      id: true,
      name: true,
      avatar_url: true,
      created_at: true,
      ratings: {
        select: {
          id: true,
          rate: true,
          description: true,
          created_at: true,
          book: {
            select: {
              name: true,
              author: true,
              cover_url: true,
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  const formattedRatings = foundUser?.ratings.map((rating) => {
    return {
      ...rating,
      book: {
        ...rating.book,
        cover_url: rating.book.cover_url.slice(6) || '',
      },
    }
  })

  return {
    props: {
      user: {
        id: user?.id,
        name: foundUser?.name,
        avatar_url: foundUser?.avatar_url,
        created_at: foundUser?.created_at.toISOString(),
      },
      ratings: formattedRatings?.map((rating) => ({
        ...rating,
        created_at: rating.created_at.toISOString(),
      })),
    },
  }
}
