import { Card } from '@/components/card'
import { CloseButton } from '@/components/closeButton'
import { Input } from '@/components/input'
import { LinkButton } from '@/components/linkButton'
import { NavigationItem } from '@/components/navigationItem'
import { Tag } from '@/components/tag'
import { ChartLineUp } from '@phosphor-icons/react'

export default function Home() {
  return (
    <>
      <LinkButton color="white" size="medium" />
      <CloseButton onClick={() => undefined} />
      <NavigationItem Icon={ChartLineUp} title="Início" />
      <Input placeholder="Placeholder" />
      <Tag name="Computação" />
      <Card rate={3} />
    </>
  )
}
