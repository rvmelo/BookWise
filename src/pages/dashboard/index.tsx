import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Dashboard() {
  const session = useSession()

  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
