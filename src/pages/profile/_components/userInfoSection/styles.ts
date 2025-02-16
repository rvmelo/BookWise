import { styled } from '@/styles/stitches.config'

export const UserInfoContainer = styled('div', {
  width: '19.25rem',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '$gray800',
  paddingBottom: '$5',
  border: '1px solid $gray700',
})

export const TopInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
})

export const AvatarWrapper = styled('div', {
  width: '95%',
  height: '95%',
  borderRadius: '999px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const AvatarBorder = styled('div', {
  width: '4.5rem',
  height: '4.5rem',
  borderRadius: '999px',
  background: 'linear-gradient(90deg, #7FD1CC, #9694F5)',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const InfoTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$1',

  h2: {
    fontSize: '$xl',
    fontWeight: '$bold',
    color: '$gray100',
  },

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
  },
})

export const Separator = styled('div', {
  width: '2rem',
  height: '0.25rem',
  borderRadius: '999px',
  background: 'linear-gradient(90deg, #7FD1CC, #9694F5)',
  margin: '$8 0',
})

export const AdditionalInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const ItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$5',
})

export const DetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  h2: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray200',
  },

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray300',
  },
})
