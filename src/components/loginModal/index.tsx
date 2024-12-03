import React from 'react'
import {
  BackDrop,
  ButtonsContainer,
  LoginButton,
  ModalLoginContainer,
} from './styles'
import Image from 'next/image'
import google from '../../../public/svg/google.svg'
import github from '../../../public/svg/github.svg'
import { signIn } from 'next-auth/react'
import { CloseButton } from '../closeButton'

interface LoginModalProps {
  onModalClose: () => void
  isOpened: boolean
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onModalClose,
  isOpened,
}) => {
  return (
    <BackDrop visible={isOpened}>
      <ModalLoginContainer>
        <CloseButton onClick={onModalClose} position="topRight" />
        <h2>Faça login para deixar sua avaliação</h2>
        <ButtonsContainer>
          <LoginButton onClick={() => signIn('google')}>
            <Image src={google} width={32} height={32} alt="google" />
            <span>Entrar com Google</span>
          </LoginButton>
          <LoginButton onClick={() => signIn('github')}>
            <Image src={github} width={32} height={32} alt="github" />
            <span>Entrar com GitHub</span>
          </LoginButton>
        </ButtonsContainer>
      </ModalLoginContainer>
    </BackDrop>
  )
}
