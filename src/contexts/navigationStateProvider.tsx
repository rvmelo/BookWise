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
  const [currentPage, setCurrentPage] = useState<NavigationPages>(
    NavigationPages.HOME,
  )

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
