import { styled } from '@/styles/stitches.config'

export const ActionButtonContainer = styled('div', {
  padding: '0.5rem',
  borderRadius: '4px',
  background: '$gray600',

  width: '$10',
  height: '$10',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
  },
})
