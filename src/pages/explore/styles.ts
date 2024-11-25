import { styled } from '@/styles/stitches.config'
import { Binoculars } from '@phosphor-icons/react'

export const ExploreContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'max(15.75rem) 1fr',
  height: '100vh',
})

export const MenuSection = styled('section', {
  padding: '$5 0 $5 $5',
})

export const ExploreSection = styled('section', {
  marginLeft: '6rem',
  marginTop: '4.5rem',
  margin: '4.5rem 6rem 3rem',
})

export const ExploreContent = styled('div', {
  maxWidth: '62.25rem',
})

export const ExploreSearchContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})

export const ExploreLabelContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',

  h2: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$gray100',
  },
})

export const ExploreIcon = styled(Binoculars, {
  color: '$green100',
  width: '2rem',
  height: '2rem',
})

export const CategoriesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$3',
  marginTop: '$10',
  marginBottom: '3rem',
})

export const BooksContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$5',
})
