import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { id, bookId, rate, description } = req.body || {}

  if (!id || !bookId) {
    return res.status(422).json({ message: 'Missing id' })
  }

  if (!description || !rate) {
    return res.status(422).json({ message: 'Missing evaluation data' })
  }

  const foundRating = await prisma.rating.findFirst({
    where: {
      user_id: String(id),
      book_id: String(bookId),
    },
  })

  if (foundRating) {
    return res.status(400).json({ message: 'Book was already evaluated' })
  }

  const rating = await prisma.rating.create({
    data: {
      description,
      rate: Number(rate),
      book_id: bookId,
      user_id: id,
      created_at: new Date(),
    },
  })

  return res.status(201).json(rating)
}
