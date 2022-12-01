import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>


          <div>
            <h1> CPS530 - Lab10 Problem 3</h1>

            <h2>

            I used Reactjs to build this website, deploying using an online hosting service Netlify
            I installed this framework like this:
            </h2>
            <ol>
              <li>Download and Installed NodeJs following 
                <a href="https://nodejs.org/en/download/"> this link </a>
              </li>
              <li> Changed directories into where my project filestructure should be.
              </li>
              <li>
                executed the following command in my terminal:
                <code>
                npx create-react-app my-app
                </code>
              </li>
              <li>
                Edit the App.js file to reflect the lab requirements
              </li>
              <li>
                install netlify-cli using the following command:
                <code>
                  npm install netlify-cli -g
                </code>
              </li>
              <li>
              Once I was ready to host this live, I executed:
                <code>
                netlify deploy
                </code>
              </li>

            </ol>
            <h1>
              I encountered no major issues running this project.
              Honestly, for a basic website this process is pretty brainless.
              Frontend development is in this amazing place where it's so quick to get started.
              Most of the issues that I encounter in my dev work is connecting backend and front end.
            </h1>
          </div>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
