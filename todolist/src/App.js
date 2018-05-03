import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {todos: []}

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Todo</h1>
        <div key={'id1'}>{'placeholder'}</div>
        {this.state.todos.map(todo =>
          <div key={todo.title}>{todo.todoItems.map(td => td.content + ': '+ td.complete)}</div>
        )}

      </div>
    );
  }
}

  
export default App;

