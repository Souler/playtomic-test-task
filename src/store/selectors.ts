import { RootState } from './rootReducer'
import { User } from './types'

export const isAuthReady = (state: RootState) => state.auth.ready
export const isLoggedIn = (state: RootState) => !!(state.auth.ready && state.auth.user)
export const getUser = (state: RootState) => state.auth.user
export const getUserSafe = (state: RootState) => state.auth.user || ({} as User)
export const getSecretString = (state: RootState) => state.apiData.secretString
export const getRandomString = (state: RootState) => state.apiData.randomString
