import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ITokenState {
  token: string
  setToken: (token: string) => void
}

const useToken = create<ITokenState>()(
  persist(
    (setState, getState) => {
      return {
        token: '',
        setToken: (newToken: string) => {
          setState({
            token: newToken,
          })
        },
      }
    },
    {
      name: 'token',
    },
  ),
)
export { useToken }
