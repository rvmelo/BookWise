import { styled } from '@/styles/stitches.config'

export const DashboardContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr minmax(16rem, 48rem) 1fr',
  height: '100vh',
})

export const MenuGrid = styled('section', {
  padding: '1.25rem 0 1.25rem 1.25rem',
})

export const FeedGird = styled('section', {
  width: '100%',
  padding: '4.5rem 4rem 0 6rem',
})

export const PopularGrid = styled('section', {
  paddingTop: '9.125rem',
})
