import { styled } from '@/styles/stitches.config'
import { User } from '@phosphor-icons/react'

export const ProfileFeedSectionContainer = styled('div', {})

export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$10',

  h2: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$gray100',
  },
})

export const ChartIcon = styled(User, {
  color: '$green100',
  width: '2rem',
  height: '2rem',
})

export const RatingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})
