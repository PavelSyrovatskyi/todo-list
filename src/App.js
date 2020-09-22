import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

  }

  

addTodo = todo => {
  this.setState(prevState => ({
    todos: [...prevState.todos, {
      id: prevState.todos.length + 1,
      title: todo,
      isEdit: false,
      isChanged: false
    }],
  }))
}

handleClickEdit = id => {
  const changedTodos = this.state.todos.map((element) => {
    if (element.id === id) {
      return {
        ...element,
        isEdit: !element.isEdit
      }
    } return element;
  })
  this.setState({
    todos: changedTodos
  })
}

handleClickEditSave = (id, todo) => {
  const changedTodos = this.state.todos.map((element) => {
    if (element.id === id) {
      return {
        ...element,
        title: todo,
        isEdit: !element.isEdit
      }
    } return element;
  })

  this.setState({
    todos: changedTodos
  })
}

deleteTodo = id => {
  const removeTodos = this.state.todos.filter((todo => todo.id !== id));
  this.setState({
    todos: removeTodos
  })
}

render() {
  return (
    <div className="App">

      <div class="header">
        <h2>Todo List</h2>
        <TodoForm 
        addTodo={this.addTodo}
        
        />
      </div>
      <TodoList
        todos={this.state.todos}
        deleteTodo={this.deleteTodo}
        handleClickEdit={this.handleClickEdit}
        handleClickEditSave={this.handleClickEditSave}
      />

    </div>
  );
}
}


export default App;
