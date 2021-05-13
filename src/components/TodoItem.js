import React from 'react'
import {RiEdit2Fill, RiDeleteBin7Fill} from 'react-icons/ri'
import {GrCheckbox, GrCheckboxSelected} from 'react-icons/gr'
import { useGlobalContext } from '../context/context'

const formatYmd = date => date.toISOString().slice(0, 10);

const TodoItem = ({id, todo, isCompleted, date, heading}) => {
    const {setAddTodoText, toggleTaskCompleted, deleteTask, setTodo, setHeading, setDate, setAddTodo, setFilter} = useGlobalContext()

    const editTask = id => {
        setHeading(heading)
        setTodo(todo)
        setAddTodo(true)
        setFilter('all')
        setAddTodoText('save')
        setDate(date === '...' ? '' : formatYmd(new Date(date + ' 6:00')))
        deleteTask(id, false)
    }
    //STYLES FOR COMPLETED TASKS
    const styles = {
        background: isCompleted && 'hsl(125, 71%, 66%)',
        textDecoration: isCompleted && 'line-through'
    }

    return (
        <li className='todo__item' style={styles}>
            <div className='todo__info'>
                <h4 className='todo__heading'>{heading}</h4>
                <p className='todo__date'>{date}</p>
                <p className='todo__task'>{todo}</p>
            </div>
            <div className='todo__btns'>
                <button className='todo__btn check-btn' onClick={() => toggleTaskCompleted(id, isCompleted)}>{isCompleted ? <GrCheckboxSelected /> : <GrCheckbox/>}</button>
                <button className='todo__btn edit-btn' onClick={() => editTask(id)}><RiEdit2Fill/></button>
                <button className='todo__btn delete-btn' onClick={() => deleteTask(id)}><RiDeleteBin7Fill/></button>
            </div>
        </li>
    )
}

export default TodoItem
