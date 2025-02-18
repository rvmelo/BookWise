import { Input } from '@/components/input'
import { Tag } from '@/components/tag'
import { UserMenu } from '@/components/UserMenu'
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  BooksContainer,
  CategoriesContainer,
  ExploreContainer,
  ExploreContent,
  ExploreIcon,
  ExploreLabelContainer,
  ExploreSearchContainer,
  ExploreSection,
  MenuSection,
} from './styles'
import { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'
import { BookEvaluationData } from '../home/_components/popularBooksSection'
import { SmallCard } from '@/components/smallCard'
import { getBooksByCategoryOrAuthor } from '@/services/getBooksByCategoryOrAuthor'
import { BookCategory } from '@/enums/bookCategory'
import { useIsMounted } from '@/hooks/isMountedHook'
import { BookModal } from './_components/bookModal'
import { getBookById } from '@/services/getBookByIdService'
import { useQuery } from '@tanstack/react-query'

export default function Explore({
  bookEvaluationsData,
}: {
  bookEvaluationsData: BookEvaluationData[]
}) {
  const [books, setBooks] = useState<BookEvaluationData[]>(bookEvaluationsData)
  const [selectedCategory, setSelectedCategory] = useState<BookCategory>(
    BookCategory.ALL,
  )

  const [selectedBookId, setSelectedBookId] = useState('')

  const [searchText, setSearchText] = useState('')

  const isTyping = useRef(false)

  const { isCurrent } = useIsMounted()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    isTyping.current = true
    setSearchText(e.target.value)
  }

  const handleBooksByCategory = useCallback(
    async (category: BookCategory) => {
      const { bookEvaluationsData } =
        (await getBooksByCategoryOrAuthor({
          category,
          searchText,
        })) || {}

      isTyping.current = false

      if (isCurrent()) {
        setBooks(bookEvaluationsData)
      }
    },
    [isCurrent, isTyping, searchText],
  )

  const handleBookClick = useCallback(async (id: string) => {
    setSelectedBookId(id)
  }, [])

  const { data: bookData, isFetching } = useQuery({
    queryKey: ['books', selectedBookId],
    queryFn: async () => {
      if (!selectedBookId) return

      const response = await getBookById({ id: selectedBookId })

      return response
    },
    refetchOnWindowFocus: false,
  })

  const { book: selectedBook } = bookData || {}

  useEffect(() => {
    const waitTime = isTyping.current ? 500 : 0
    const timeOutId = setTimeout(() => {
      handleBooksByCategory(selectedCategory)
    }, waitTime)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [handleBooksByCategory, isTyping, selectedCategory])

  return (
    <>
      {selectedBook && (
        <BookModal
          visible={!!selectedBook}
          rate={selectedBook.avgRate}
          book={selectedBook}
          handleModalClose={() => setSelectedBookId('')}
          isLoading={isFetching}
        />
      )}
      <ExploreContainer>
        <MenuSection>
          <UserMenu />
        </MenuSection>
        <ExploreSection>
          <ExploreContent>
            <ExploreSearchContainer>
              <ExploreLabelContainer>
                <ExploreIcon />
                <h2>Explorar</h2>
              </ExploreLabelContainer>
              <Input
                placeholder="Buscar livro ou autor"
                onChange={(e) => handleSearch(e)}
              />
            </ExploreSearchContainer>
            <CategoriesContainer>
              {Object.values(BookCategory).map((category) => (
                <Tag
                  name={category}
                  key={category}
                  isSelected={category === selectedCategory}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </CategoriesContainer>
            <BooksContainer>
              {books.map((bookEvaluation) => {
                return (
                  <SmallCard
                    key={bookEvaluation.id}
                    rate={bookEvaluation.avgRate}
                    name={bookEvaluation.name}
                    author={bookEvaluation.author}
                    coverUrl={bookEvaluation.coverUrl}
                    onClick={() => handleBookClick(bookEvaluation.id)}
                  />
                )
              })}
            </BooksContainer>
          </ExploreContent>
        </ExploreSection>
      </ExploreContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const booksWithAvg = await prisma.rating.groupBy({
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
    },
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      categories: true,
      ratings: {
        select: {
          id: true,
          rate: true,
        },
      },
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

  return {
    props: {
      bookEvaluationsData: sortedBooks,
    },
  }
}
