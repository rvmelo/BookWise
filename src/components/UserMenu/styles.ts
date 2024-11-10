import { styled } from '@/styles/stitches.config'
import { SignOut } from '@phosphor-icons/react'

export const UserMenuContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '2.5rem 3rem 1.5rem',
  height: '95vh',
  backgroundImage: 'linear-gradient(135deg, #255D6A, #2A2879, #0E1116)',
  position: 'fixed',
  borderRadius: '$md',
  overflow: 'hidden',
})

export const ContentSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4rem',
})

export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',

  h2: {
    fontSize: '$xl',
    fontWeight: '$bold',
    backgroundImage: 'linear-gradient(90deg, #7FD1CC, #9694F5)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
})

export const NavigationMenuContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$6',
})

export const SignOutIcon = styled(SignOut, {
  color: '#F75A68',
  width: '1.25rem',
  height: '1.25rem',
})

export const LogOutButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',

  cursor: 'pointer',

  background: 'transparent',
  border: 'none',

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray200',
  },
})

export const AvatarWrapper = styled('div', {
  width: '90%',
  height: '90%',
  borderRadius: '999px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const AvatarBorder = styled('div', {
  width: '2rem',
  height: '2rem',
  borderRadius: '999px',
  background: 'linear-gradient(90deg, #7FD1CC, #9694F5)',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
