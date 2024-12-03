import { styled } from '@/styles/stitches.config'

export const BackDrop = styled('main', {
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  position: 'fixed',
  background: 'rgba(0, 0, 0, 0.60)',
  width: '100vw',
  height: '100vh',
  zIndex: 999,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    visible: {
      true: {
        opacity: 1,
      },
    },
  },
})

export const ModalLoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$10',

  position: 'relative',

  borderRadius: '$md',

  background: '$gray700',

  padding: '3.5rem 4.5rem',

  h2: {
    fontWeight: '$bold',
    fontSize: '$md',
    color: '$gray200',
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  maxWidth: '23.25rem',
  width: '100%',
})

export const LoginButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$5',

  borderRadius: '8px',

  minWidth: '23.25rem',

  padding: '$5 $6',
  background: '$gray600',

  span: {
    fontWeight: '$bold',
    fontSize: '1.125rem',
    color: '$gray200',
  },

  '&:hover': {
    cursor: 'pointer',
  },
})
