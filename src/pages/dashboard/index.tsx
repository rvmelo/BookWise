import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { DashboardContainer, FeedGird, MenuGrid, PopularGrid } from './styles'
import { UserMenu } from '@/components/UserMenu'
import { FeedSection } from './_components/feedSection'
import { PopularBooksSection } from './_components/popularBooksSection'

export default function Dashboard() {
  const session = useSession()

  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <DashboardContainer>
      <MenuGrid>
        <UserMenu />
      </MenuGrid>
      <FeedGird>
        <FeedSection />
      </FeedGird>
      <PopularGrid>
        <PopularBooksSection />
      </PopularGrid>
    </DashboardContainer>
  )
}
