import React from 'react'
import { renderWithRouterAndRedux } from '../lib/testing-utils'
import LoginLayout from './LoginLayout'

jest.mock('./Login', () => () => '__Login__')
jest.mock('./SideNav', () => () => '__SideNav__')

test('renders a <Login />', () => {
  const { getByText } = renderWithRouterAndRedux(<LoginLayout />)
  const login = getByText('__Login__')
  expect(login).toBeInTheDocument()
})
