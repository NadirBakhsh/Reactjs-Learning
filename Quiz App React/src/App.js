import React, { Component } from 'react';
import './App.css';

import Quiz from './Compoents/Quiz.js'

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      startQuiz: false,
      quizArr: [],
      quizStartBtn: true
    }

    this.startQuiz = this.startQuiz.bind(this)
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(response => response.json())
      .then(json => {
        this.setState({
          quizArr: [json]
        })
      })
  }

  startQuiz() {
    this.setState({
      startQuiz: true,
      quizStartBtn: false
    })
  }
  render() {
    const { startQuiz, quizArr, quizStartBtn } = this.state;
    //console.log(quizArr)
    return (
      <div className="App">
        <header className="App-header">
          <h3>Quiz Application</h3>
        </header>

        {startQuiz && <Quiz quizArr={quizArr} />} <br /><br />

        <center> {quizStartBtn && <button onClick={this.startQuiz}>Quiz Start</button>}</center>

      </div>
    );
  }
}

export default App;


//https://opentdb.com/api.php?amount=10