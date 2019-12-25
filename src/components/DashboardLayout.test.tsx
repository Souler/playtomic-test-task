import React from 'react'
import { render } from '../lib/testing-utils'
import DashboardLayout from './DashboardLayout'

jest.mock('./Banner', () => () => '__Banner__')
jest.mock('./SideNav', () => () => '__SideNav__')

test('renders a <SideNav />', () => {
  const { getByText } = render(<DashboardLayout />)
  const sidenav = getByText('__SideNav__')
  expect(sidenav).toBeInTheDocument()
})

test('renders a <Banner />', () => {
  const { getByText } = render(<DashboardLayout />)
  const banner = getByText('__Banner__')
  expect(banner).toBeInTheDocument()
})

test('renders its children', () => {
  const { getByText } = render(
    <DashboardLayout>
      <span>child1</span>
      <span>child2</span>
      <span>child3</span>
    </DashboardLayout>,
  )
  const child1 = getByText('child1')
  const child2 = getByText('child2')
  const child3 = getByText('child3')
  expect(child1).toBeInTheDocument()
  expect(child2).toBeInTheDocument()
  expect(child3).toBeInTheDocument()
})
