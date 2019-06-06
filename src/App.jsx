import { hot } from 'react-hot-loader/root'
import React from "react"
import RouterIndex from "@/router"
import { createStore } from "redux"
import rootReducer from "@/redux/reducers"
import { Provider } from "react-redux"

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
