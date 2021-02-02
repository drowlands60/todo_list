import React from 'react';
import './App.css';
import TodoList from './components/TodoList';


class App extends React.Component {

  
  constructor(props){
    super(props);

    this.state = {
      todos: []
    }

  }

  addTodos(todo) {
      this.state.todos.push(todo);
  }
  
  render() {
    return (
      <div className="App">
        <p>React to do</p>
        <TodoList todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
