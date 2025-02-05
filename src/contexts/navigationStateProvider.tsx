import { useRouter } from 'next/router'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export enum NavigationPages {
  HOME = 'home',
  PROFILE = 'profile',
  EXPLORE = 'explore',
}

interface NavigationContextValue {
  currentPage: NavigationPages
  setCurrentPage: (page: NavigationPages) => void
}

const NavigationContext = createContext({} as NavigationContextValue)

export const NavigationStateProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const router = useRouter()

  const onRouteChange = useCallback(() => {
    if (router.pathname.includes(NavigationPages.EXPLORE)) {
      return NavigationPages.EXPLORE
    }

    if (router.pathname.includes(NavigationPages.PROFILE)) {
      return NavigationPages.PROFILE
    }

    return NavigationPages.HOME
  }, [router.pathname])

  const [currentPage, setCurrentPage] = useState<NavigationPages>(onRouteChange)

  useEffect(() => {
    const current = onRouteChange()

    setCurrentPage(current)
  }, [onRouteChange])

  const providerValues = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
    }),
    [currentPage, setCurrentPage],
  )

  return (
    <NavigationContext.Provider value={providerValues}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useStateNavigation = (): NavigationContextValue => {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error(
      'useStateNavigation must be used within a NavigationStateProvider',
    )
  }

  return context
}
