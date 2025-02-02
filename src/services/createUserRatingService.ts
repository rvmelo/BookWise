import { api } from '@/lib/axios'
import { Rating } from '@prisma/client'

interface CreateUserRatingRequestDTO {
  id: string
  bookId: string
  rate: number
  description: string
}

interface CreateUserRatingResponseDTO {
  rating: Rating
}

export const createUserRating = async ({
  id,
  bookId,
  description,
  rate,
}: CreateUserRatingRequestDTO) => {
  const { data } = await api.post<CreateUserRatingResponseDTO>(`/rating`, {
    id,
    bookId,
    description,
    rate,
  })

  return data
}
