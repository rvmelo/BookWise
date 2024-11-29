import { api } from '@/lib/axios'
import { Book, Rating } from '@prisma/client'

type BookEvaluationData = Pick<Book, 'id' | 'name' | 'author'> & {
  ratings: Pick<Rating, 'id'>[]
} & { coverUrl: string; avgRate: number }

interface GetBooksByCategoryRequestDTO {
  category: string
  searchText?: string
}

interface GetBooksByCategoryResponseDTO {
  bookEvaluationsData: BookEvaluationData[]
}

export const getBooksByCategory = async ({
  category,
  searchText,
}: GetBooksByCategoryRequestDTO) => {
  const { data } = await api.get<GetBooksByCategoryResponseDTO>(
    `/explore/${category}/${searchText}`,
  )

  return data
}
