import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { id } = req.query || {}

  if (!id) {
    return res.status(400).json({ error: 'Missing id' })
  }

  const bookWithAvg = await prisma.rating.groupBy({
    where: {
      book_id: String(id),
    },
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

  const book = await prisma.book.findUnique({
    where: {
      id: String(id),
    },
    select: {
      id: true,
      author: true,
      name: true,
      cover_url: true,
      ratings: {
        select: {
          id: true,
          rate: true,
          description: true,
          created_at: true,
          user: {
            select: {
              name: true,
              avatar_url: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  return res.json({
    book: {
      ...book,
      avgRate: bookWithAvg[0]._avg.rate,
      cover_url: book?.cover_url.slice(6) || '',
    },
  })
}
