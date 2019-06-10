import { hot } from 'react-hot-loader/root'
import React from "react"
import RouterIndex from "@/router"
import { createStore, applyMiddleware } from "redux"
import rootReducer from "@/redux/reducers"
import { Provider } from "react-redux"
import createSagaMiddleware from 'redux-saga'
import fetchDataSaga from "@/redux/sagas"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(fetchDataSaga)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterIndex />
      </Provider>
    )
  }
}

export default hot(App)
