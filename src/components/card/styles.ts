import { styled } from '@/styles/stitches.config'
import { Star } from '@phosphor-icons/react'

export const CardContainer = styled('div', {
  padding: '1.25rem 1.5rem',
  borderRadius: '8px',
  background: '$gray600',

  maxWidth: '37.5rem',

  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',

  '&:hover': {
    cursor: 'pointer',
    border: '1px solid $gray500',
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TopSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  span: {
    fontSize: '0.875rem',
    fontWeight: '$regular',
    color: '$gray300',
  },
})

export const TitleContainer = styled('div', {
  h2: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100',
  },

  span: {
    fontSize: '0.875rem',
    fontWeight: '$regular',
    color: '$gray400',
  },
})

export const BottomSection = styled('div', {
  p: {
    fontSize: '0.875rem',
    fontWeight: '$regular',
    color: '$gray300',
    lineHeight: '22.4px',
  },
})

export const StarsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
})

export const StyledStar = styled(Star, {
  color: '$purple100',
})
