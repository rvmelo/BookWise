import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/card'
import {
  ArrowRightIcon,
  ChartIcon,
  EvaluationContainer,
  FeedSectionContainer,
  LastReadingContainer,
  LastReadingHeader,
  RecentEvaluationContainer,
  TitleContainer,
} from './styles'

export const FeedSection: React.FC = () => {
  return (
    <FeedSectionContainer>
      <TitleContainer>
        <ChartIcon />
        <h2>Início</h2>
      </TitleContainer>
      <LastReadingContainer>
        <LastReadingHeader>
          <span>Sua última leitura</span>
          <Link href="/">
            Ver todas <ArrowRightIcon />
          </Link>
        </LastReadingHeader>
        <Card rate={3} />
      </LastReadingContainer>
      <RecentEvaluationContainer>
        <span>Avaliações mais recentes</span>
        <EvaluationContainer>
          <Card rate={4} />
        </EvaluationContainer>
      </RecentEvaluationContainer>
    </FeedSectionContainer>
  )
}
