import React from 'react'
import { useGlobalContext } from '../context/context'
import { GiHamburgerMenu } from 'react-icons/gi'

const Sidebar = () => {
    const {filter, setFilter, setIsOpen, isOpen, number: {all, done, todo}} = useGlobalContext()
    //SAME AS NAVBAR
    return (
        <aside className={isOpen ? 'sidebar open' : 'sidebar'}>
            <div className='sidebar__center'>
                <div className='nav__burger'>
                    <h2 className='nav__title title'>Todo app</h2>
                    <button className='nav__burger-btn' onClick={() => setIsOpen(false)}><GiHamburgerMenu /></button>
                </div>
                <section className='sidebar__links'>
                    <button className={filter === 'all' ? 'btn active' : 'btn'} onClick={() => setFilter('all')}>all<span>{all}</span></button>
                    <button className={filter === 'todos' ? 'btn active' : 'btn'} onClick={() => setFilter('todos')}>todo<span>{todo}</span></button>
                    <button className={filter === 'done' ? 'btn active' : 'btn'} onClick={() => setFilter('done')}>done<span>{done}</span></button>
                </section>
                <section className='sidebar__login'>
                    <button>Sign-in / Login</button>
                </section>
            </div>
        </aside>
    )
}

export default Sidebar
