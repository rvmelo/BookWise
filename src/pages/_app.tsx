// _app.tsx

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { NavigationStateProvider } from '@/contexts/navigationStateProvider'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div>
      <SessionProvider session={session}>
        <NavigationStateProvider>
          <Component {...pageProps} />
        </NavigationStateProvider>
      </SessionProvider>
    </div>
  )
}
