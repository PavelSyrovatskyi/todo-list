import React, {Component} from 'react';



class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todoInput: '' };
    }

    handleChange = event => {
        this.setState({todoInput: event.target.value});
    }

    handleSubmit = () => {
        this.props.addTodo(this.state.todoInput);
        this.setState({
            todoInput: ''
        })
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.todoInput}
                    type="text" 
                    placeholder="Add todo"
                    onChange={event => this.handleChange(event)}

                />
                <button 
                className="addBtn" 
                onClick={this.handleSubmit} 
                disabled={!this.state.todoInput}
                >Add</button>
            </div>
            
        );
    }
}

export default TodoForm;