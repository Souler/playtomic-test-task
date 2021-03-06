import React from 'react'
import { act, fireEvent, renderWithRedux } from '../lib/testing-utils'
import { logoutRequest } from '../store/actions'
import configureStore from '../store/configureStore'
import Banner from './Banner'

const user = {
  avatarUrl: 'http://lorempixel.com/100/100/',
  displayName: 'Foo Bar',
  email: 'foo@bar.com',
  role: 'none',
}
const state = {
  auth: {
    ready: true,
    user,
  },
}

test('shows the authenticated user displayName', () => {
  const { getByText } = renderWithRedux(<Banner />, { state })
  const el = getByText(user.displayName)
  expect(el).toBeInTheDocument()
})

test('shows the authenticated user role', () => {
  const { getByText } = renderWithRedux(<Banner />, { state })
  const el = getByText(user.role)
  expect(el).toBeInTheDocument()
})

test('shows the authenticated user avatar', () => {
  const { getByAltText } = renderWithRedux(<Banner />, { state })
  const el = getByAltText(user.displayName + ' profile pic')
  expect(el).toBeInTheDocument()
  expect(el.getAttribute('src')).toBe(user.avatarUrl)
})

test('dispatches logout action when double-clicks on the user info', () => {
  const store = configureStore(state)
  jest.spyOn(store, 'dispatch')

  const { getByText } = renderWithRedux(<Banner />, { store })

  const el = getByText(user.role)
  expect(el).toBeInTheDocument()

  act(() => {
    fireEvent(el, new MouseEvent('dblclick', { bubbles: true, cancelable: true }))
  })

  expect(store.dispatch).toHaveBeenCalledWith(logoutRequest())
})
