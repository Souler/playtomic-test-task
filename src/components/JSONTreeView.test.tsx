import React from 'react'
import { render } from '../lib/testing-utils'
import JSONTreeView from './JSONTreeView'

jest.mock('react-json-tree', () => jest.fn(() => '__JSONTree__'))

test('renders a <JSONTree />', () => {
  const data = { foo: 'bar' }
  const { getByText } = render(<JSONTreeView data={data} />)
  const jsonTree = getByText('__JSONTree__')
  expect(jsonTree).toBeInTheDocument()
})

test.skip('pass down all props to <JSONTree />', () => {
  const data = { foo: 'baz' }
  render(<JSONTreeView data={data} />)
  expect(jest.requireMock('react-json-tree')).toHaveBeenCalledWith({ data })
})
