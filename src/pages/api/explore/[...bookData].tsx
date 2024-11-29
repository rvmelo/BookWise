import { BookCategory } from '@/enums/bookCategory'
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { bookData } = req.query || {}

  const category = bookData?.[0]
  const searchText = bookData?.[1]

  if (!category) {
    return res.status(400).json({ error: 'Missing category' })
  }

  const shouldFilterByCategory = category !== BookCategory.ALL

  const booksWithAvg = await prisma.rating.groupBy({
    where: {
      book: {
        ...(shouldFilterByCategory && {
          categories: {
            some: {
              category: {
                name: category,
              },
            },
          },
        }),
        ...(searchText && {
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
        }),
      },
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

  const bookIds = booksWithAvg.map((book) => book.book_id)

  const books = await prisma.book.findMany({
    where: {
      id: {
        in: bookIds,
      },
      ...(shouldFilterByCategory && {
        categories: {
          some: {
            category: {
              name: category,
            },
          },
        },
      }),
      ...(searchText && {
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
      }),
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

  return res.json({ bookEvaluationsData: sortedBooks })
}
