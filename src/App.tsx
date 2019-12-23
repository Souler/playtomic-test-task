import React from 'react'
import { Provider } from 'react-redux'
import Router from './components/AppRouter'
import configureStore from './store/configureStore'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
