import { styled } from '@/styles/stitches.config'

export const CloseButtonContainer = styled('div', {
  padding: '0.5rem',
  borderRadius: '4px',
  background: '$gray600',

  maxWidth: '2.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
    background: '$gray500',
  },
})
