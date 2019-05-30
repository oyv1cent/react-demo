import React from "react"
import './index.scss'

export default class Count extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      countNum: 0
    }
    console.log(this.state)
  }

  handleAddCount = () => {
    console.log(this.state)
    this.setState({
      countNum: this.state.countNum + 1
    })
  }

  handleMinusCount = () => {
    this.setState({
      countNum: this.state.countNum - 1
    })
  }

  render() {
    const { countNum } = this.state
    return (
      <div className="count-wrap">
        <button onClick={this.handleAddCount}>+</button>
        <span>{countNum}</span>
        <button onClick={this.handleMinusCount}>-</button>
      </div>
    )
  }
}
