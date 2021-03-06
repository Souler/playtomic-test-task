import { RootState } from './rootReducer'
import { User } from './types'

export const isAuthReady = (state: RootState) => state.auth.ready
export const isLoggedIn = (state: RootState) => !!(state.auth.ready && state.auth.user)
export const getUser = (state: RootState) => state.auth.user
export const getUserSafe = (state: RootState) => state.auth.user || ({} as User)
export const getApiResource = (resourceId: string) => (state: RootState) =>
  state.apiData[resourceId] || null
