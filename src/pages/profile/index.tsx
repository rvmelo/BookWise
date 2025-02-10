import React from 'react'
import { MenuGrid, ProfileContainer } from './styles'
import { UserMenu } from '@/components/UserMenu'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
import { prisma } from '@/lib/prisma'

export default function Profile() {
  return (
    <ProfileContainer>
      <MenuGrid>
        <UserMenu />
      </MenuGrid>
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
      name: true,
      avatar_url: true,
      created_at: true,
      ratings: {
        select: {
          id: true,
          rate: true,
          book: {
            select: {
              name: true,
              author: true,
              summary: true,
            },
          },
        },
      },
    },
  })

  return {
    props: {
      user: {
        name: foundUser?.name,
        avatar_url: foundUser?.avatar_url,
        created_at: foundUser?.created_at.toISOString(),
      },
      ratings: foundUser?.ratings,
    },
  }
}
