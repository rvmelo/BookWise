import { styled } from '@/styles/stitches.config'
import { Star } from '@phosphor-icons/react'

export const SmallCardContainer = styled('div', {
  padding: '1.125rem 1.25rem',
  borderRadius: '8px',
  background: '$gray700',

  maxWidth: '19.35rem',

  display: 'flex',
  flexDirection: 'row',
  gap: '1.25rem',

  '&:hover': {
    cursor: 'pointer',
    border: '1px solid $gray600',
  },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const InfoCOntainer = styled('div', {
  h2: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100',
  },

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
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
