import React, { useState } from "react";


const Todo = props => {
    const [todo, setTodo] = useState('');
    return (
        <li onClick={() => { props.handleClickEditSave(props.todo.id, todo) }}>
            {props.todo.isEdit ? (
                <>
                    <input 
                    onClick={(e) => e.stopPropagation()} 
                    type="text" 
                    value={todo} 
                    onChange={(e) => setTodo(e.target.value)} />
                </>
            ) : (
                    <span>{props.todo.title}</span>
                )}
            <span>
                {props.todo.isEdit ? (
                    <button
                    onClick={(e) => {
                        e.stopPropagation()
                        props.handleClickEditSave(props.todo.id, todo)}
                    }
                    className="saveBtn">
                    Save
                </button>
                ) : (
                    <button
                    onClick={(e) => {
                        e.stopPropagation()
                        props.deleteTodo(props.todo.id)}
                    }
                    className="deleteBtn">
                    x
                </button>
                )}
            </span>

        </li>
    )

};

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map(todo => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    deleteTodo={props.deleteTodo}
                    handleClickEdit={props.handleClickEdit}
                    handleClickEditSave={props.handleClickEditSave}
                />
            ))}
        </ul>
    );

};

export default TodoList;