import React from 'react'
import { renderWithRouterAndRedux } from '../lib/testing-utils'
import PrivateRoute from './PrivateRoute'

test('renders its children when user is logged in', () => {
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
  const { getByText } = renderWithRouterAndRedux(
    <PrivateRoute exact={true} path="/">
      <span>child1</span>
      <span>child2</span>
      <span>child3</span>
    </PrivateRoute>,
    { state },
  )
  const child1 = getByText('child1')
  const child2 = getByText('child2')
  const child3 = getByText('child3')
  expect(child1).toBeInTheDocument()
  expect(child2).toBeInTheDocument()
  expect(child3).toBeInTheDocument()
})

test('redirects to /login when no user is logged in', () => {
  const state = {
    auth: {
      ready: true,
      user: null,
    },
  }
  const { history } = renderWithRouterAndRedux(
    <PrivateRoute exact={true} path="/">
      <span>child1</span>
      <span>child2</span>
      <span>child3</span>
    </PrivateRoute>,
    { state },
  )
  expect(history.location.pathname).toBe('/login')
})
