import { act, fireEvent, render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SideNav from './SideNav'

test('renders a dashboard link', () => {
  const rendered = render(
    <BrowserRouter>
      <SideNav />
    </BrowserRouter>,
  )
  const link = rendered.getByText(/dashboard/i)
  expect(link).toBeInTheDocument()

  act(() => {
    fireEvent(link, new MouseEvent('click', { bubbles: true, cancelable: true }))
  })

  expect(document.location.pathname).toBe('/dashboard')
})

test('renders a settings link', () => {
  const rendered = render(
    <BrowserRouter>
      <SideNav />
    </BrowserRouter>,
  )
  const link = rendered.getByText(/settings/i)
  expect(link).toBeInTheDocument()

  act(() => {
    fireEvent(link, new MouseEvent('click', { bubbles: true, cancelable: true }))
  })

  expect(document.location.pathname).toBe('/settings')
})
