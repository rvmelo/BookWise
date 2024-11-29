import { useCallback, useEffect, useRef } from 'react'

interface HookReturn {
  isCurrent: () => boolean | null
}

export function useIsMounted(): HookReturn {
  const isMounted = useRef<boolean | null>(null)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  const isCurrent = useCallback(() => isMounted.current, [])

  return { isCurrent }
}
