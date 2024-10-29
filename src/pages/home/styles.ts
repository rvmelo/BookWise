import { styled } from '@/styles/stitches.config'
import background from '../../../public/background.png'

export const HomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'max(37rem) 1fr',
  height: '100vh',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
})

export const LeftSection = styled('section', {
  maxWidth: '37rem',
  width: '100%',
  height: '100%',
  padding: '$3',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const BackgroundImage = styled('div', {
  height: '100%',
  width: '100%',
  backgroundImage: `url(${background.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  borderRadius: '10px',

  overflow: 'hidden',
})

export const RightSection = styled('section', {
  background: '$gray800',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '$10',
})

export const WelcomeContainer = styled('div', {
  h2: {
    fontWeight: '$bold',
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '4px',
  },

  maxWidth: '23.25rem',
  width: '100%',

  span: {
    fontWeight: '$regular',
    fontSize: '$sm',
    color: '$gray200',
  },

  marginBottom: '$10',
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

  width: '100%',

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
