import { styled } from '@/styles/stitches.config'
import { CaretRight } from '@phosphor-icons/react'

export const PopularBooksSectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  maxWidth: '19.35rem',

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray100',
  },

  a: {
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
    textDecoration: 'none',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$3',
  },
})

export const ArrowRightIcon = styled(CaretRight, {
  color: '$purple100',
  width: '1rem',
  height: '1rem',
})

export const PopularBooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
