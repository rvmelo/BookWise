import { CloseButton } from '@/components/closeButton'
import { LinkButton } from '@/components/linkButton'
import { NavigationItem } from '@/components/navigationItem'
import { ChartLineUp } from '@phosphor-icons/react'

export default function Home() {
  return (
    <>
      <LinkButton color="white" size="medium" />
      <CloseButton onClick={() => undefined} />
      <NavigationItem Icon={ChartLineUp} title="Início" />
    </>
  )
}
