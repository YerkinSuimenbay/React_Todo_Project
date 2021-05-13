import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
import TodoItem from './TodoItem'

const TodoList = () => {
    const {state, filter, deleteCompletedTasks, deleteAllTasks, search, currentPage, setCurrentPage} = useGlobalContext()

    // FILTERING SPECIFIC TODOS
    let todos = []
    if (filter === 'todos') {
        todos = state.filter(todo => !todo.isCompleted)
    } else if (filter === 'done') {
        todos = state.filter(todo => todo.isCompleted)
    } else if (filter === 'all') {
        todos = state
    }
    // SEARCHING SPECIFIC TODOS
    if (search) {
        todos = todos.filter(todoItem => {
            return todoItem.todo.toLowerCase().includes(search.toLowerCase()) || 
            todoItem.heading.toLowerCase().includes(search.toLowerCase())
        })
    }
    // PAGINATION
    const [todosPerPage] = useState(10)  //setTodosPerPage TO ENABLE CLIENTS CHOOSE todosPerPage
    const lastTodo = todosPerPage * currentPage
    const firstTodo = lastTodo - todosPerPage
    const currentTodos = todos.slice(firstTodo, lastTodo)
    const num_of_pages = []
    // PAGINATION BUTTONS
    for (let i = 0; i < Math.ceil(todos.length / todosPerPage); i++) {
        num_of_pages[i] = i + 1
    }

    if (todos.length) {
        return (
            <main className='todo'>
                <ul className='todo__list'>
                    {currentTodos.map(todo => {
                        return <TodoItem key={todo.id} {...todo}/>
                    })}
                </ul>
                <div className="btns">
                    {num_of_pages.map(num => {
                        return  <button key={num} className={`page-btn ${currentPage === num && "active-btn"}`} onClick={() => setCurrentPage(num)}>{num}</button>
                    })}
                </div>
                <div className='delete-btns-container'>
                    <button onClick={deleteCompletedTasks}>Delete completed tasks</button>
                    <button onClick={deleteAllTasks}>Delete all tasks</button>
                </div>
            </main>
        )
    }
    return (
        <main className='todo'>
            <h4 className='no-todos'>no tasks</h4>
        </main>
    )

}

export default TodoList
