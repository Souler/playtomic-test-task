import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRoot from './components/AppRoot'
import configureStore from './store/configureStore'

function App({ store = configureStore() }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    </Provider>
  )
}

export default App
