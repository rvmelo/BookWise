import { styled } from '@/styles/stitches.config'
import { Star } from '@phosphor-icons/react'

export const CardContainer = styled('div', {
  padding: '1.25rem 1.5rem',
  borderRadius: '8px',
  background: '$gray600',

  maxWidth: '37.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$8',

  '&:hover': {
    cursor: 'pointer',
    border: '1px solid $gray500',
  },

  variants: {
    shouldDisplayHeader: {
      true: {
        background: '$gray700',
      },
      false: {
        background: '$gray600',
      },
    },
  },
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray300',
  },
})

export const TimeDisplayWrapper = styled('div', {
  time: {
    fontWeight: '$regular',
    fontSize: '$sm',
    color: '$gray300',
  },
  marginBottom: '$3',
})

export const TitleContainer = styled('div', {
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

export const BottomSection = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$5',

  p: {
    fontSize: '0.875rem',
    fontWeight: '$regular',
    color: '$gray300',
    lineHeight: '22.4px',
  },

  a: {
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$regular',
    textDecoration: 'none',
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

export const BottomSectionTextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
