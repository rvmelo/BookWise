import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { DashboardContainer, MenuGrid } from './styles'
import { UserMenu } from '@/components/UserMenu'

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
    </DashboardContainer>
  )
}
