import { api } from '@/lib/axios'
import { Book, Rating } from '@prisma/client'

export type BookData = Pick<Book, 'id' | 'name' | 'author' | 'cover_url'> & {
  ratings: Pick<Rating, 'id' | 'rate' | 'created_at' | 'description'>[] & {
    user: {
      name: string
      avatar_url: string
    }
  }
} & {
  categories: {
    category: {
      id: string
      name: string
    }
  }[]
} & {
  avgRate: number
}

interface GetBooksByIdRequestDTO {
  id: string
}

interface GetBooksByIdResponseDTO {
  book: BookData
}

export const getBookById = async ({ id }: GetBooksByIdRequestDTO) => {
  const { data } = await api.get<GetBooksByIdResponseDTO>(`/books/${id}`)

  return data
}
