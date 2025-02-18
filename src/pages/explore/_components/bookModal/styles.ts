import { keyframes, styled } from '@/styles/stitches.config'
import { BookmarkSimple, BookOpen, Star } from '@phosphor-icons/react'

export const BackDrop = styled('main', {
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  position: 'fixed',
  background: 'rgba(0, 0, 0, 0.60)',
  width: '100vw',
  height: '100vh',
  zIndex: 600,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',

  variants: {
    visible: {
      true: {
        opacity: 1,
      },
    },
  },
})

export const ModalBookContainer = styled('div', {
  background: '$gray800',
  padding: '4rem 3rem',
  overflowY: 'auto',
})

export const BookWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  borderRadius: '$md',

  background: '$gray700',
  padding: '$6 $8 $4',

  minWidth: '35.25rem',
  maxWidth: '35.25rem',
})

export const BookDataContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$8',
})

export const BookInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TopInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$2',

  h2: {
    fontSize: '$lg',
    fontWeight: '$bold',
    color: '$gray100',
  },

  span: {
    fontSize: '$md',
    fontWeight: '$regular',
    color: '$gray300',
  },
})

export const BottomInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    fontSize: '$sm',
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

export const BookBottomContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '3.75rem',
  padding: '$6 0',
  borderTop: '1px solid $gray600',
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$4',
})

export const SaveIcon = styled(BookmarkSimple, {
  color: '$green100',
})

export const TextInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',

  span: {
    fontSize: '$sm',
    color: '$gray300',
    fontWeight: '$regular',
  },

  h2: {
    fontSize: '$md',
    color: '$gray200',
    fontWeight: '$bold',
  },
})

export const BookIcon = styled(BookOpen, {
  color: '$green100',
})

export const EvaluationHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginTop: '2.875rem',
  marginBottom: '1.375rem',

  '> span': {
    fontWeight: '$regular',
    fontSize: '$sm',
    color: '$gray200',
  },
})

export const EvaluationButton = styled('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',

  span: {
    fontWeight: '$bold',
    fontSize: '$md',
    color: '$purple100',
  },
})

export const CommentsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Spinner = styled('div', {
  border: '4px solid $purple100',
  borderTop: '4px solid $white',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  animation: `${spin} 1s linear infinite`,
})

export const SpinnerContainer = styled('div', {
  width: '100%',
  padding: '$6',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
