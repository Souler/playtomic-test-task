import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React, { PropsWithChildren, ReactElement } from 'react'
import { Router } from 'react-router'

interface RenderWithRouterOptions {
  route?: string
  history?: ReturnType<typeof createMemoryHistory>
}

function defaultRenderWithRouterOptions(
  options: RenderWithRouterOptions,
): Required<RenderWithRouterOptions> {
  const route = options.route || '/'
  const history = options.history || createMemoryHistory({ initialEntries: [route] })
  return { route, history }
}

function renderWithRouter(ui: ReactElement, options: RenderWithRouterOptions) {
  const { history } = defaultRenderWithRouterOptions(options)
  const Wrapper = ({ children }: PropsWithChildren<{}>) => (
    <Router history={history}>{children}</Router>
  )
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  }
}

export default renderWithRouter
export { defaultRenderWithRouterOptions }
