import { styled } from '@/styles/stitches.config'
import { Star } from '@phosphor-icons/react'

export const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  span: {
    color: '$gray300',
    fontWeight: '$regular',
    fontSize: '$sm',
  },
})

export const ProfileCardContainer = styled('div', {
  padding: '$5 $6',
  borderRadius: '8px',
  background: '$gray600',

  maxWidth: '37.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  '&:hover': {
    cursor: 'pointer',
    border: '1px solid $gray500',
  },
})

export const BookInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$6',
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TextWrapper = styled('div', {
  h2: {
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '1.125rem',
  },
  span: {
    color: '$gray400',
    fontWeight: '$regular',
    fontSize: '0.875rem',
  },
})

export const EvaluationTextContainer = styled('div', {
  p: {
    color: '$gray300',
    fontWeight: '$regular',
    fontSize: '0.875rem',
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
