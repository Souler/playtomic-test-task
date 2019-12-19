import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Router from './components/Router';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;