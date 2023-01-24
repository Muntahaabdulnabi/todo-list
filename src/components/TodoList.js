import React from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'

const TodoList = ({ todos, handleAddTodo, handleDeleteTodo, handeRemoveTodos }) => {
    return (
        <div className='todo-list'>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    date={todo.date}
                    handleDeleteTodo={handleDeleteTodo} />
            ))}
            <AddTodo handleAddTodo={handleAddTodo} />

            <div>
                <button className='clear'
                    onClick={handeRemoveTodos}
                    style={{ color: "red", backgroundColor: "darkgrey", padding: "1rem" }}>
                    Clear all
                </button>
            </div>

        </div>
    )
}

export default TodoList