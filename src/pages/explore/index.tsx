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
import { BookData, getBookById } from '@/services/getBookByIdService'

export default function Explore({
  bookEvaluationsData,
}: {
  bookEvaluationsData: BookEvaluationData[]
}) {
  const [books, setBooks] = useState<BookEvaluationData[]>(bookEvaluationsData)
  const [selectedCategory, setSelectedCategory] = useState<BookCategory>(
    BookCategory.ALL,
  )

  const [selectedBook, setSelectedBook] = useState<BookData>()

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
    const { book } = (await getBookById({ id })) || {}

    setSelectedBook(book)
  }, [])

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
