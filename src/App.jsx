import { hot } from 'react-hot-loader/root'
import React from "react"
import img from '@/assets/5.jpeg'
class App extends React.Component {
  test = () => {
    console.log(1)
  }
  render() {
    return (
      <>
        <div className="test" onClick={this.test}>enable sHMR</div>
        <img src={img}/>
      </>
    )
  }
}

export default hot(App)
