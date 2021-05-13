import React, {useContext, useEffect, useReducer, useState} from 'react'
import {reducer} from './reducer'

const AppContext = React.createContext()

let initialState = [
    // {
    //     id: 1,
    //     heading: 'a',
    //     todo: 'buy a milk',
    //     date: new Date().toDateString().slice(4),
    //     isCompleted: false,
    // }, {
    //     id: 2,
    //     heading: 'b',
    //     todo: 'buy a water',
    //     date: new Date().toDateString().slice(4),
    //     isCompleted: true,
    // },
]

if (localStorage && localStorage.state) {
    initialState = JSON.parse(localStorage.state)
}

const ContextProvider = ({children}) => {
    //INPUT BOX
    const [todo, setTodo] = useState('')
    const [heading, setHeading] = useState('')
    const [date, setDate] = useState('')
    //OPENS THE TODO INPUT BOX
    const [addTodo, setAddTodo] = useState(false)
    //SWITHCES BETWEEN "ADD NEW TASK" AND "SAVE"
    const [addTodoText, setAddTodoText] = useState('add new task')

    //ACTIVATES FEEDBACK BOX
    const [showFeedback, setShowFeedback] = useState(false)
    //FEEDBACK TEXT
    const [feedbackText, setFeedbackText] = useState('new task is added')
    
    //FILTERING
    const [filter, setFilter] = useState('all')
    //SORTING
    const [search, setSearch] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1)

    //STATE CONTROL WITH useReducer
    const [state, dispatch] = useReducer(reducer, initialState)

    //ADD NEW TASK
    const addItem = newItem => {
        dispatch({type: 'ADD_ITEM', payload: newItem})
    }
    //CHECK/UNCHECK TASKS
    const toggleTaskCompleted = (id, isCompleted) => {
        dispatch({type: 'TASK_COMPLETED', payload: id})
        const task = state.find(todo => todo.id === id).todo
        setFeedbackText(`task '${task}' ${isCompleted ? 'unchecked' : 'checked'}`)
        setShowFeedback(true)
    }
    //DELETE A TASK
    const deleteTask = (id, boolean=true) => {
        dispatch({type: 'DELETE_TASK', payload: id})
        const task = state.find(todo => todo.id === id).todo
        setFeedbackText(`task '${task}' deleted`)
        boolean && setShowFeedback(true)

    }
    //DELETE COMPLETED TASKS
    const deleteCompletedTasks = () => {
        dispatch({type: 'DELETE_COMPLETED_TASKS'})
        if (state.filter(todo => todo.isCompleted).length) {
            setFeedbackText('completed tasks deleted')
        } else {
            setFeedbackText('no completed tasks')
        }
        setShowFeedback(true)
    }
    //DELETE ALL TASKS
    const deleteAllTasks = id => {
        dispatch({type: 'DELETE_ALL_TASKS', payload: id})
        setFeedbackText('all tasks deleted')
        setShowFeedback(true)
    }
    //TOTAL NUMBER OF ALL/COMPLETED/UNCOMPLETED TASKS
    const number = {
        all: state.length,
        done: state.filter(todo => todo.isCompleted).length,
        todo: state.filter(todo => !todo.isCompleted).length
    }

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    return (
        <AppContext.Provider
            value={{
            state,
            addItem,
            toggleTaskCompleted,
            deleteTask,
            deleteAllTasks,
            todo,
            setTodo,
            heading,
            date,
            setDate,
            setHeading,
            deleteCompletedTasks,
            filter,
            setFilter,
            isOpen,
            setIsOpen,
            addTodo,
            setAddTodo,
            search,
            setSearch,
            number, 
            showFeedback,
            setShowFeedback,
            addTodoText,
            setAddTodoText,
            feedbackText,
            setFeedbackText,
            currentPage,
            setCurrentPage,
        }}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext)

export {ContextProvider, useGlobalContext}