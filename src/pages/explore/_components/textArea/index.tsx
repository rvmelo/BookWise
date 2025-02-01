import React, { TextareaHTMLAttributes } from 'react'
import { InputAreaContainer, LetterAmountContainer } from './styled'

interface TextAreaContainerProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  textLength?: number
}

export const TextArea: React.FC<TextAreaContainerProps> = ({
  textLength = 0,
  ...props
}) => {
  return (
    <InputAreaContainer>
      <textarea {...props} />
      <LetterAmountContainer>
        <span>{textLength}/455</span>
      </LetterAmountContainer>
    </InputAreaContainer>
  )
}
