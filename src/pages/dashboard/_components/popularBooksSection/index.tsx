import React from 'react'
import Link from 'next/link'
import { SmallCard } from '@/components/smallCard'
import {
  ArrowRightIcon,
  HeaderContainer,
  PopularBooksContainer,
  PopularBooksSectionContainer,
} from './styles'

export const PopularBooksSection: React.FC = () => {
  return (
    <PopularBooksSectionContainer>
      <HeaderContainer>
        <span>Livros populares</span>
        <Link href="/">
          Ver todas <ArrowRightIcon />
        </Link>
      </HeaderContainer>
      <PopularBooksContainer>
        <SmallCard rate={3} />
      </PopularBooksContainer>
    </PopularBooksSectionContainer>
  )
}
