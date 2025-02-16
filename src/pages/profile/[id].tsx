import React from 'react'
import { FeedGird, MenuGrid, ProfileContainer, UserInfoGrid } from './styles'
import { UserMenu } from '@/components/UserMenu'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
import { prisma } from '@/lib/prisma'
import { ProfileFeedSection } from './_components/profileFeedSection'
import { User } from '@prisma/client'
import { RatingData } from './_components/profileFeedCard'
import { UserInfoSection } from './_components/userInfoSection'

interface EvaluationData {
  user: Pick<User, 'id' | 'name' | 'avatar_url' | 'created_at'>
  ratings: RatingData[]
  isMyPage: boolean
}

export default function Profile({ ratings, user, isMyPage }: EvaluationData) {
  return (
    <ProfileContainer>
      <MenuGrid>
        <UserMenu />
      </MenuGrid>
      <FeedGird>
        <ProfileFeedSection
          ratings={ratings}
          userId={user.id}
          isMyPage={isMyPage}
        />
      </FeedGird>
      <UserInfoGrid>
        <UserInfoSection user={user} ratingsAmount={ratings.length} />
      </UserInfoGrid>
    </ProfileContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const { id } = params || {}

  const session = await getServerSession(req, res, authOptions)

  const { user } = session || {}

  const isMyPage = user?.id === id

  const foundUser = await prisma.user.findUnique({
    where: {
      id: String(id),
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
        id: String(id),
        name: foundUser?.name,
        avatar_url: foundUser?.avatar_url,
        created_at: foundUser?.created_at.toISOString(),
      },
      ratings: formattedRatings?.map((rating) => ({
        ...rating,
        created_at: rating.created_at.toISOString(),
      })),
      isMyPage,
    },
  }
}
