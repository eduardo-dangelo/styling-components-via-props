import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducer'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
