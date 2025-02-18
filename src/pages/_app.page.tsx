// _app.tsx

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { NavigationStateProvider } from '@/contexts/navigationStateProvider'
import { ModalProvider } from '@/contexts/modalProvider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <NavigationStateProvider>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </NavigationStateProvider>
        </SessionProvider>
      </QueryClientProvider>
    </div>
  )
}
