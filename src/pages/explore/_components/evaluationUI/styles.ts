import { styled } from '@/styles/stitches.config'
import { Star } from '@phosphor-icons/react'

export const EvaluationUIWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-end',

  borderRadius: '8px',

  padding: '$6',

  background: '$gray700',

  marginBottom: '$3',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

export const StarsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',

  svg: {
    cursor: 'pointer',
  },
})

export const StyledStar = styled(Star, {
  color: '$purple100',
})

export const ActionButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$2',
})

export const Form = styled('form', {
  width: '100%',
})
