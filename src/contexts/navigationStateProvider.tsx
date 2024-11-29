import { useRouter } from 'next/router'
import React, { createContext, useContext, useMemo, useState } from 'react'

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

  const [currentPage, setCurrentPage] = useState<NavigationPages>(() => {
    const currentPage = router.pathname

    if (currentPage.includes(NavigationPages.EXPLORE)) {
      return NavigationPages.EXPLORE
    }

    if (currentPage.includes(NavigationPages.PROFILE)) {
      return NavigationPages.PROFILE
    }

    return NavigationPages.HOME
  })

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
