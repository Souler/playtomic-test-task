import React from 'react'
import { render } from '../lib/testing-utils'
import DashboardContent from './DashboardContent'

test('renders the title', () => {
  const title = 'Test title'
  const { getByText } = render(<DashboardContent title={title} />)
  const titleEl = getByText(title)
  expect(titleEl).toBeInTheDocument()
})

test('renders its children', () => {
  const { getByText } = render(
    <DashboardContent title="">
      <span>child1</span>
      <span>child2</span>
      <span>child3</span>
    </DashboardContent>,
  )
  const child1 = getByText('child1')
  const child2 = getByText('child2')
  const child3 = getByText('child3')
  expect(child1).toBeInTheDocument()
  expect(child2).toBeInTheDocument()
  expect(child3).toBeInTheDocument()
})
