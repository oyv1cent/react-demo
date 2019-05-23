import { hot } from 'react-hot-loader/root'
import React from "react"

class App extends React.Component {
  test = () => {
    console.log(1)
  }
  render() {
    return (
      <div onClick={this.test}>enable sHMR</div>
    )
  }
}

export default hot(App)
