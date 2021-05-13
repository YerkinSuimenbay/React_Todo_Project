import React, { useRef } from 'react'
import { useGlobalContext } from '../context/context'

const Search = () => {
    const {setAddTodo, setSearch} = useGlobalContext()
    const searchRef = useRef(null)
    //OPEN ADD TODO BOX and CLEAN SEARCH INPUT FIELD
    const clickHandler = () => {
        searchRef.current.value = ''
        setSearch('')
        setAddTodo(true)
    }

    return (
        <form className='form search-form'>
            <input type='text' id='search' ref={searchRef} name='search' placeholder='Search for ...' onChange={e => setSearch(e.target.value)}></input>
            <button type='button' onClick={clickHandler}>Add todo</button>
        </form>
    )
}

export default Search
