import React from 'react'
import { useGlobalContext } from '../context/context'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const {filter, setFilter, setIsOpen, number: {all, todo, done}, setCurrentPage} = useGlobalContext()

    const filterByStatus = status => {
        setFilter(status)
        setCurrentPage(1)  //ALWAYS SHOW THE FIRST PAGE ON SWITCHING TO OTHER STATUS
    }

    return (
        <nav className='nav'>
            <div className='nav__center'>
                <section className='nav__links'>
                    <button className={filter === 'all' ? 'active' : undefined} onClick={() => filterByStatus('all')}>all <span>{all}</span></button>
                    <button className={filter === 'todos' ? 'active' : undefined} onClick={() => filterByStatus('todos')}>todo <span className='red'>{todo}</span></button>
                    <button className={filter === 'done' ? 'active' : undefined} onClick={() => filterByStatus('done')}>done <span className='green'>{done}</span></button>
                </section>
                <section className='nav__login'>
                    <button>Sign-in / Login</button>
                </section>
            </div>
            <div className='nav__burger'>
                <h2 className='nav__title'>Todo app</h2>
                <button className='nav__burger-btn' onClick={() => setIsOpen(true)}><GiHamburgerMenu /></button>
            </div>
            
        </nav>
    )
}
export default Navbar
