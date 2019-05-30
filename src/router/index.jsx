import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Index from "@/pages/index"
import About from "@/pages/about"
import React from "react"

export default class RouterIndex extends React.Component {
  render(){
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
      </Router>
    )
  }
}
