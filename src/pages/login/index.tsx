import Image from 'next/image'
import google from '../../../public/svg/google.svg'
import github from '../../../public/svg/github.svg'
import rocket from '../../../public/svg/rocket.svg'
import {
  BackgroundImage,
  ButtonsContainer,
  HomeContainer,
  LeftSection,
  LoginButton,
  RightSection,
  WelcomeContainer,
} from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const { data } = useSession()

  const router = useRouter()

  useEffect(() => {
    const { user } = data || {}

    if (user?.name) {
      router.push('/home')
    }
  }, [data, router])

  return (
    <HomeContainer>
      <LeftSection>
        <BackgroundImage />
      </LeftSection>
      <RightSection>
        <WelcomeContainer>
          <h2>Boas vindas!</h2>
          <span>Faça seu login ou acesse como visitante.</span>
        </WelcomeContainer>
        <ButtonsContainer>
          <LoginButton onClick={() => signIn('google')}>
            <Image src={google} width={32} height={32} alt="google" />
            <span>Entrar com Google</span>
          </LoginButton>
          <LoginButton onClick={() => signIn('github')}>
            <Image src={github} width={32} height={32} alt="github" />
            <span>Entrar com GitHub</span>
          </LoginButton>
          <LoginButton onClick={() => router.push('/dashboard')}>
            <Image src={rocket} width={32} height={32} alt="visit" />
            <span>Acessar como visitante</span>
          </LoginButton>
        </ButtonsContainer>
      </RightSection>
    </HomeContainer>
  )
}
