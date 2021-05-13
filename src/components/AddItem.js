import React from 'react'
import { useGlobalContext } from '../context/context'

const AddItem = () => {
    
    const {setFeedbackText, addTodoText, setAddTodoText, addItem, todo, setTodo, heading, setHeading, date, setDate, addTodo, setAddTodo, setShowFeedback} = useGlobalContext()

    //RESETING AND CLOSING ADD TODO
    const resetAndCLoseAddTodo = () => {
        setAddTodo(false)
        setTodo('')
        setHeading('')
        setDate('')
    }

    const submitHandler = event => {
        event.preventDefault()
        if (todo) {
            const datee =  date ? new Date(date).toDateString().slice(4) : '...'
            const newItem = {id: new Date().getTime(), heading, todo, date: datee, isCompleted: false}
            setAddTodoText('add new task')
            setFeedbackText(addTodoText === 'save' ? `task '${todo}' edited` : `new task '${todo}' added`)
            resetAndCLoseAddTodo()
            setShowFeedback(true)
            addItem(newItem)
        }
    }

    return (
        <div className={addTodo ? 'form-container open' : 'form-container'}>
            <form className='form' onSubmit={submitHandler}>
                <input type='text' id='heading' name='heading' placeholder='New heading...' value={heading} onChange={e => setHeading(e.target.value)}></input>
                <input type='text' required id='task' name='task' placeholder='New task...' value={todo} onChange={e => setTodo(e.target.value)}></input>
                <input type='date' id='date' name='task' placeholder='New task...' value={date} onChange={e => setDate(e.target.value)}></input>
                <button type='submit' className='btn add-btn'>{addTodoText}</button>
                
                <div className='form__close' onClick={resetAndCLoseAddTodo}>&times;</div>
            </form>
        </div>
    )
}

export default AddItem
