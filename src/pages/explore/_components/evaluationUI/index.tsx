import { UserInfo } from '@/components/card/components/userInfo'
import React, { useState } from 'react'
import {
  ActionButtonsContainer,
  EvaluationUIWrapper,
  Header,
  StarsContainer,
  StyledStar,
} from './styles'
import { TextArea } from '../textArea'
import { ActionButton } from '../actionButton'

interface CommentInputProps {
  userName: string
  userAvatarUrl?: string
  rateLimit?: number
  onCancel: () => void
}

export const EvaluationUI: React.FC<CommentInputProps> = ({
  userName,
  onCancel,
  userAvatarUrl,
  rateLimit = 5,
}) => {
  const [rate, setRate] = useState(0)

  const starsArray = Array.from({ length: rateLimit })

  const starsInfo = starsArray.map((_, i) => i <= rate - 1)

  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    const charCount = newText.replace(/\s/g, '').length

    if (charCount <= 455) {
      setText(e.target.value)
    }
  }

  return (
    <EvaluationUIWrapper>
      <Header>
        <UserInfo userName={userName} userAvatarUrl={userAvatarUrl} />
        <StarsContainer>
          {starsInfo.map((star, i) =>
            star ? (
              <StyledStar
                key={i}
                size={24}
                weight="fill"
                onClick={() => setRate(i + 1)}
              />
            ) : (
              <StyledStar key={i} size={24} onClick={() => setRate(i + 1)} />
            ),
          )}
        </StarsContainer>
      </Header>
      <TextArea
        value={text}
        onChange={handleChange}
        rows={6}
        style={{ width: '100%', resize: 'none' }}
        textLength={text.replace(/\s/g, '').length}
      />
      <ActionButtonsContainer>
        <ActionButton type="accept" onClick={() => console.log('accept')} />
        <ActionButton type="deny" onClick={onCancel} />
      </ActionButtonsContainer>
    </EvaluationUIWrapper>
  )
}
