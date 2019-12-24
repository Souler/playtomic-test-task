import { applyMiddleware, compose, createStore, DeepPartial } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { RootState } from './rootReducer'
import rootSaga from './rootSaga'

const composeEnhancers =
  (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

function configureStore(preloadedState: DeepPartial<RootState> = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
