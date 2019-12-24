import { render } from '@testing-library/react'
import React, { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { defaultRenderWithReduxOptions } from './renderWithRedux'
import { defaultRenderWithRouterOptions } from './renderWithRouter'

type RenderWithRouterAndReduxOptions = Partial<
  ReturnType<typeof defaultRenderWithReduxOptions> &
    ReturnType<typeof defaultRenderWithRouterOptions>
>

function defaultRenderWithRouterAndReduxOptions(
  options: RenderWithRouterAndReduxOptions,
): Required<RenderWithRouterAndReduxOptions> {
  const withRouterOptions = defaultRenderWithRouterOptions(options)
  const withReduxOptions = defaultRenderWithReduxOptions(options)
  return {
    ...withRouterOptions,
    ...withReduxOptions,
  }
}

function renderWithRouterAndRedux(ui: ReactElement, options: RenderWithRouterAndReduxOptions) {
  const { history, store } = defaultRenderWithRouterAndReduxOptions(options)
  const Wrapper = ({ children }: PropsWithChildren<{}>) => (
    <Router history={history}>
      <Provider store={store}>{children}</Provider>
    </Router>
  )

  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
    store,
  }
}

export default renderWithRouterAndRedux
export { defaultRenderWithRouterAndReduxOptions }
