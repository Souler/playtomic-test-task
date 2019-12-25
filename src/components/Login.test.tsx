import React from 'react'
import { renderWithRouterAndRedux } from '../lib/testing-utils'
import Login from './Login'

jest.mock('react-firebaseui/StyledFirebaseAuth', () => () => '__StyledFirebaseAuth__')

test.todo('redirects to location.state.from when already logged in')

test('renders a firebase login form when not logged in', () => {
  const state = {
    auth: {
      ready: true,
      user: null,
    },
  }
  const { getByText } = renderWithRouterAndRedux(<Login />, { state })
  const el = getByText('__StyledFirebaseAuth__')
  expect(el).toBeInTheDocument()
})
