import { api } from '@/lib/axios'
import { Book, Rating, User } from '@prisma/client'

type UserType = Pick<User, 'avatar_url' | 'name'>

export type BookData = Pick<Book, 'id' | 'name' | 'author' | 'cover_url'> & {
  ratings: (Pick<Rating, 'id' | 'rate' | 'created_at' | 'description'> & {
    user: UserType
  })[]
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
