import { styled } from '@/styles/stitches.config'

export const CloseButtonContainer = styled('div', {
  padding: '0.5rem',
  borderRadius: '4px',
  background: '$gray700',

  maxWidth: '2.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
    background: '$gray500',
  },

  position: 'absolute',

  variants: {
    position: {
      topLeft: {
        top: '1rem',
        left: '1rem',
      },
      topRight: {
        top: '1rem',
        right: '1rem',
      },
      bottomLeft: {
        bottom: '1rem',
        left: '1rem',
      },
      bottomRight: {
        bottom: '1rem',
        right: '1rem',
      },
    },
  },
})
