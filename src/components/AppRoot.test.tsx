import React from 'react'
import { renderWithRouterAndRedux } from '../lib/testing-utils'
import AppRoot from './AppRoot'

jest.mock('./AppLoading', () => () => '__AppLoading__')
jest.mock('./Login', () => () => '__Login__')
jest.mock('./Profile', () => () => '__Profile__')
jest.mock('./Settings', () => () => '__Settings__')

test('renders <AppLoading> while the auth info is not ready', () => {
  const state = { auth: { user: null, ready: false } }
  const { getByText } = renderWithRouterAndRedux(<AppRoot />, { state })
  const el = getByText('__AppLoading__')
  expect(el).toBeInTheDocument()
})

test('renders <Login> when auth info is ready and no user is authenticated', () => {
  const state = { auth: { user: null, ready: true } }
  const { getByText } = renderWithRouterAndRedux(<AppRoot />, { state })
  const el = getByText('__Login__')
  expect(el).toBeInTheDocument()
})

describe('when user is authenticated', () => {
  const state = {
    auth: {
      ready: true,
      user: {
        avatarUrl: '#url',
        displayName: '#displayName',
        email: '#email',
        role: '#role',
      },
    },
  }
  test('renders <Profile> when route is /dashboard', () => {
    const route = '/dashboard'
    const { getByText } = renderWithRouterAndRedux(<AppRoot />, { state, route })
    const el = getByText('__Profile__')
    expect(el).toBeInTheDocument()
  })

  test('renders <Settings> when route is /settings', () => {
    const route = '/settings'
    const { getByText } = renderWithRouterAndRedux(<AppRoot />, { state, route })
    const el = getByText('__Settings__')
    expect(el).toBeInTheDocument()
  })

  test('redirects to /dashboard by default', () => {
    const route = '/unk'
    const { history } = renderWithRouterAndRedux(<AppRoot />, { state, route })
    expect(history.location.pathname).toBe('/dashboard')
  })
})
