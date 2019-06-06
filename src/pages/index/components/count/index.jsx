import React from "react"
import './index.scss'
import { connect } from "react-redux"
import { decrement, increment } from "@/redux/actions/countAction"

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => ({
  increment: num => dispatch(increment(num)),
  decrement: num => dispatch(decrement(num))
})

class Count extends React.Component {

  handleAddCount = () => {
    this.props.increment(2)
  }

  handleMinusCount = () => {
    this.props.decrement(2)
  }

  render() {
    const { count } = this.props
    return (
      <div className="count-wrap">
        <button onClick={this.handleAddCount}>+</button>
        <span>{count}</span>
        <button onClick={this.handleMinusCount}>-</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
