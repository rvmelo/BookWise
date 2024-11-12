import { styled } from '@/styles/stitches.config'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

export const FeedSectionContainer = styled('div', {})

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

export const ChartIcon = styled(ChartLineUp, {
  color: '$green100',
  width: '2rem',
  height: '2rem',
})

export const LastReadingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const LastReadingHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray100',
  },

  a: {
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
    textDecoration: 'none',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$3',
  },
})

export const ArrowRightIcon = styled(CaretRight, {
  color: '$purple100',
  width: '1rem',
  height: '1rem',
})

export const RecentEvaluationContainer = styled('div', {
  marginTop: '$10',

  span: {
    fontWeight: '$regular',
    fontSize: '$sm',
    color: '$gray100',
  },
})

export const EvaluationContainer = styled('div', {
  marginTop: '$4',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
