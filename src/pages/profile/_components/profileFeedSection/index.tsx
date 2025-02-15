import React from 'react'
import {
  ChartIcon,
  ProfileFeedSectionContainer,
  RatingsContainer,
  TitleContainer,
} from './styles'
import { ProfileFeedCard, RatingData } from '../profileFeedCard'

interface ProfileFeedSectionProps {
  ratings: RatingData[]
}

export const ProfileFeedSection: React.FC<ProfileFeedSectionProps> = ({
  ratings,
}) => {
  return (
    <ProfileFeedSectionContainer>
      <TitleContainer>
        <ChartIcon />
        <h2>Perfil</h2>
      </TitleContainer>
      <RatingsContainer>
        {ratings?.map((ratingData) => (
          <ProfileFeedCard
            key={ratingData.id}
            book={ratingData.book}
            description={ratingData.description}
            rate={ratingData.rate}
            createdAt={ratingData.created_at}
          />
        ))}
      </RatingsContainer>
    </ProfileFeedSectionContainer>
  )
}
