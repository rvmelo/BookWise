import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  ChartIcon,
  ProfileFeedSectionContainer,
  RatingsContainer,
  TitleContainer,
} from './styles'
import { ProfileFeedCard, RatingData } from '../profileFeedCard'
import { Input } from '@/components/input'
import { useIsMounted } from '@/hooks/isMountedHook'
import { getUserEvaluationsService } from '@/services/getUserEvaluationsService'

interface ProfileFeedSectionProps {
  ratings: RatingData[]
  userId: string
}

export const ProfileFeedSection: React.FC<ProfileFeedSectionProps> = ({
  ratings,
  userId,
}) => {
  const [loadedRatings, setLoadedRatings] =
    useState<ProfileFeedSectionProps['ratings']>(ratings)

  const [searchText, setSearchText] = useState('')

  const { isCurrent } = useIsMounted()

  const isTyping = useRef(false)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    isTyping.current = true
    setSearchText(e.target.value)
  }

  const onGetUserEvaluations = useCallback(async () => {
    try {
      if (!userId) {
        return
      }

      const { ratings: auxRatings } =
        (await getUserEvaluationsService({
          id: userId,
          searchText,
        })) || {}

      isTyping.current = false

      if (isCurrent()) {
        setLoadedRatings(auxRatings)
      }
    } catch {
      isTyping.current = false
      alert('Error during evaluation search')
    }
  }, [isCurrent, userId, searchText])

  useEffect(() => {
    isTyping.current = true

    const timeOutId = setTimeout(() => {
      onGetUserEvaluations()
    }, 1000)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [onGetUserEvaluations])

  return (
    <ProfileFeedSectionContainer>
      <TitleContainer>
        <ChartIcon />
        <h2>Perfil</h2>
      </TitleContainer>
      <Input
        placeholder="Buscar livro avaliado"
        onChange={handleSearch}
        isUnlimitedWidth={true}
      />
      <RatingsContainer>
        {loadedRatings?.map((ratingData) => (
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
