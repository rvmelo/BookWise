import { styled } from '@/styles/stitches.config'

export const TagContainer = styled('div', {
  border: '1px solid $purple100',
  padding: '0.25rem 1rem',

  borderRadius: '999px',

  background: 'transparent',

  maxWidth: '7.625rem',

  span: {
    color: '$purple100',
    fontWeight: '$regular',
    fontSize: '$md',
  },

  '&:hover': {
    background: '$purple200',
    borderColor: '$purple100',
    span: {
      color: '$gray100',
    },
    cursor: 'pointer',
  },

  variants: {
    isSelected: {
      true: {
        background: '$purple200',
        border: 'none',
        span: {
          color: '$gray100',
        },
      },
    },
  },
})
