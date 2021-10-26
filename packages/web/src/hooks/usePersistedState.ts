import { Dispatch, SetStateAction, useEffect, useState } from "react"

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export function usePersistedState<T>(key: string, initialState: T | (() => T)): Response<T> {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}