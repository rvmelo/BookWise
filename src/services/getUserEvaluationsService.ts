import { api } from '@/lib/axios'
import { RatingData } from '@/pages/profile/_components/profileFeedCard'

interface GetUserEvaluationsRequestDTO {
  id: string
  searchText: string
}

interface GetUserEvaluationResponseDTO {
  ratings: RatingData[]
}

export const getUserEvaluationsService = async ({
  id,
  searchText,
}: GetUserEvaluationsRequestDTO) => {
  const { data } = await api.get<GetUserEvaluationResponseDTO>(
    `/profile/${id}/${searchText}`,
  )

  return data
}
