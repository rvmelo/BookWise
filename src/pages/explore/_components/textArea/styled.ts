import { styled } from '@/styles/stitches.config'

export const InputAreaContainer = styled('div', {
  border: '1px solid $gray800',
  borderRadius: '4px',
  borderColor: '$green200',

  padding: '0.875rem $5',

  marginTop: '$6',
  marginBottom: '$3',

  position: 'relative',

  width: '100%',
  height: '10.25rem',

  svg: {
    color: '$gray500',
  },

  background: '$gray700',

  textarea: {
    '::placeholder': {
      color: '$gray400',
      fontWeight: '$regular',
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
})

export const LetterAmountContainer = styled('div', {
  position: 'absolute',

  right: '5px',
  bottom: '5px',

  span: {
    color: '#7C7C8A',
    fontWeight: '$regular',
    fontSize: '$xs',
  },
})
