import { styled } from '@/styles/stitches.config'

export const LinkButtonContainer = styled('button', {
  background: 'transparent',

  borderRadius: '$sm',

  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '$2',

  textDecoration: 'none',

  span: {
    margin: '0 auto',
    fontWeight: '$bold',
  },

  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    maxWidth: {
      medium: {
        maxWidth: '7rem',
        span: {
          fontSize: '$md',
        },
      },
      small: {
        maxWidth: '5.75rem',
        span: {
          fontSize: '$sm',
        },
      },
    },
    color: {
      white: {
        color: '$gray200',
        '&:hover': {
          background: 'rgba(230, 232, 242, 0.04)',
        },
      },

      purple: {
        color: '$purple100',
        '&:hover': {
          background: 'rgba(131, 129, 217, 0.06)',
        },
      },
    },
  },
})
