import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { evaluationData } = req.query || {}

  const id = evaluationData?.[0]
  const searchText = evaluationData?.[1]

  const foundUser = await prisma.user.findUnique({
    where: {
      id: String(id),
    },
    select: {
      name: true,
      avatar_url: true,
      created_at: true,
      ratings: {
        where: searchText
          ? {
              book: {
                OR: [
                  {
                    author: {
                      contains: searchText,
                    },
                  },
                  {
                    name: {
                      contains: searchText,
                    },
                  },
                ],
              },
            }
          : {},
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

  const result = {
    user: {
      name: foundUser?.name,
      avatar_url: foundUser?.avatar_url,
      created_at: foundUser?.created_at.toISOString(),
    },
    ratings: formattedRatings?.map((rating) => ({
      ...rating,
      created_at: rating.created_at.toISOString(),
    })),
  }

  return res.json(result)
}
