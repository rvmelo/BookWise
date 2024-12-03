import dynamic from 'next/dynamic'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

const LoginModal = dynamic(
  () => import('../components/loginModal').then((mod) => mod.LoginModal),
  {
    ssr: false,
  },
)

interface ModalContextValue {
  onLoginModalCall: () => void
  isLoginModalOpen: boolean
}

const ModalContext = createContext({} as ModalContextValue)

export const ModalProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const onLoginModalCall = useCallback(() => {
    setIsLoginModalOpen((prev) => !prev)
  }, [])

  const providerValues = useMemo(
    () => ({
      onLoginModalCall,
      isLoginModalOpen,
    }),
    [onLoginModalCall, isLoginModalOpen],
  )

  return (
    <ModalContext.Provider value={providerValues}>
      {isLoginModalOpen && (
        <LoginModal
          isOpened={isLoginModalOpen}
          onModalClose={onLoginModalCall}
        />
      )}
      {children}
    </ModalContext.Provider>
  )
}

export const useModalProvider = (): ModalContextValue => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModalProvider must be used within a ModalProvider')
  }

  return context
}
