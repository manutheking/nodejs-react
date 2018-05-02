import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {todos: []}

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(users => this.setState({ users }));
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
        {this.state.todos.map(todo =>
          <div key={todo.title}>{todo.todolist}</div>
        )}
      </div>
    );
  }
}

  
export default App;

