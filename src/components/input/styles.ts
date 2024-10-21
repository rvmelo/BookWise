import { styled } from '@/styles/stitches.config'

export const InputContainer = styled('div', {
  border: '1px solid $gray500',
  borderRadius: '4px',
  padding: '0.875rem 0.875rem 0.875rem 1.25rem',

  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',

  svg: {
    color: '$gray500',
  },

  maxWidth: '19rem',

  input: {
    '::placeholder': {
      color: '$gray400',
      fontWeight: 400,
      fontSize: '$sm',
    },
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    width: '100%',

    caretColor: 'blue',

    color: '$gray200',
    fontWeight: '$regular',
    fontSize: '$sm',
  },

  variants: {
    isActive: {
      true: {
        borderColor: '$green200',
        svg: {
          color: '$green200',
        },
      },
    },
  },
})
