import React from "react"
import { connect } from "react-redux"
import { fetchDataSaga } from "@/redux/actions"

const mapStateToProps = (state) => ({
  data: state.about
})

const mapDispatchToProps = (dispatch) => ({
  fetchDataSaga: () => dispatch(fetchDataSaga()),
})

class About extends React.Component {

  componentDidMount() {
    this.props.fetchDataSaga()
  }

  render() {
    const { data } = this.props
    const { title = 'title', desc="desc" } = data
    return (
      <>
        <h1>{title}</h1>
        <p>{desc}</p>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
