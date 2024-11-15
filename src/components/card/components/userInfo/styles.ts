import { styled } from '@/styles/stitches.config'

export const UserDataContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',
})

export const UserInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '4px',

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
  },

  h2: {
    fontSize: '$md',
    fontWeight: '$regular',
    color: '$gray100',
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
