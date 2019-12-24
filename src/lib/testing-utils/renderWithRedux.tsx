import { render } from '@testing-library/react'
import React, { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from 'redux'
import configureStore from '../../store/configureStore'
import { RootState } from '../../store/rootReducer'

interface RenderWithReduxOptions {
  state?: DeepPartial<RootState>
  store?: ReturnType<typeof configureStore>
}

function defaultRenderWithReduxOptions(
  options: RenderWithReduxOptions,
): Required<RenderWithReduxOptions> {
  const state = options.state || {}
  const store = options.store || configureStore(state)
  return { state, store }
}

function renderWithRedux(ui: ReactElement, options: RenderWithReduxOptions) {
  const { store } = defaultRenderWithReduxOptions(options)
  const Wrapper = ({ children }: PropsWithChildren<{}>) => (
    <Provider store={store}>{children}</Provider>
  )
  return {
    ...render(ui, { wrapper: Wrapper }),
    store,
  }
}

export default renderWithRedux
export { defaultRenderWithReduxOptions }
