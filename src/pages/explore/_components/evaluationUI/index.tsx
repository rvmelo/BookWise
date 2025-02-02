import { UserInfo } from '@/components/card/components/userInfo'
import React, { useState } from 'react'
import {
  ActionButtonsContainer,
  EvaluationUIWrapper,
  Form,
  Header,
  StarsContainer,
  StyledStar,
} from './styles'
import { TextArea } from '../textArea'
import { ActionButton } from '../actionButton'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserRating } from '@/services/createUserRatingService'
import { AxiosError } from 'axios'

interface CommentInputProps {
  userName: string
  userId: string
  userAvatarUrl?: string
  bookId: string
  rateLimit?: number
  handleFinishEvaluation: () => void
}

const evaluationSchema = z.object({
  description: z.string().min(3, {
    message: 'O comentário precisa ter no mínimo 3 letras',
  }),
  rate: z
    .number()
    .positive({ message: 'O número precisa ser um valor positivo' }),
})

type EvaluationFormData = z.infer<typeof evaluationSchema>

export const EvaluationUI: React.FC<CommentInputProps> = ({
  userName,
  userId,
  bookId,
  handleFinishEvaluation,
  userAvatarUrl,
  rateLimit = 5,
}) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<EvaluationFormData>({
    resolver: zodResolver(evaluationSchema),
  })

  const [rate, setRate] = useState(0)

  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    const charCount = newText.replace(/\s/g, '').length

    if (charCount <= 455) {
      setText(newText)
    }
  }

  async function handleEvaluation(data: EvaluationFormData) {
    try {
      const { rate, description } = data || {}

      handleFinishEvaluation()
      await createUserRating({ rate, description, bookId, id: userId })
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
      }
    }
  }

  return (
    <EvaluationUIWrapper>
      <Form onSubmit={handleSubmit(handleEvaluation)}>
        <Header>
          <UserInfo userName={userName} userAvatarUrl={userAvatarUrl} />
          <Controller
            name="rate"
            control={control}
            render={({ field }) => {
              return (
                <StarsContainer>
                  {starsInfo.map((star, i) =>
                    star ? (
                      <StyledStar
                        key={i}
                        size={24}
                        weight="fill"
                        onClick={() => {
                          setRate(i + 1)
                          field.onChange(i + 1)
                        }}
                      />
                    ) : (
                      <StyledStar
                        key={i}
                        size={24}
                        onClick={() => {
                          setRate(i + 1)
                          field.onChange(i + 1)
                        }}
                      />
                    ),
                  )}
                </StarsContainer>
              )
            }}
          />
        </Header>
        <Controller
          name="description"
          control={control}
          render={({ field }) => {
            return (
              <TextArea
                value={text}
                onChange={(e) => {
                  handleChange(e)
                  field.onChange(e.target.value)
                }}
                rows={6}
                style={{ width: '100%', resize: 'none' }}
                textLength={text.replace(/\s/g, '').length}
              />
            )
          }}
        />

        <ActionButtonsContainer>
          <ActionButton actionType="deny" onClick={handleFinishEvaluation} />

          <ActionButton
            type="submit"
            disabled={isSubmitting}
            actionType="accept"
          />
        </ActionButtonsContainer>
      </Form>
    </EvaluationUIWrapper>
  )
}
