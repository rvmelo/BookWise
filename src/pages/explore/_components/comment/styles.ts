import { styled } from '@/styles/stitches.config'
import { Star } from '@phosphor-icons/react'

export const CommentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  background: '$gray700',
  padding: '$6',

  maxWidth: '35.25rem',

  borderRadius: '8px',

  p: {
    fontWeight: '$regular',
    fontSize: '$sm',
    color: '$gray300',
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

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})
