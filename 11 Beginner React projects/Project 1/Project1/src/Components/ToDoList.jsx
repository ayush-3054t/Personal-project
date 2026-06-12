import React from 'react'
import { useState } from 'react'
// import '../styles/styleToDo.css'


const ToDoList = () => {
    const [toDo, setToDo] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        setToDo((todo) => {
            return toDo.concat({
                value: inputValue,
                id: Math.floor(Math.random() * 10)
            })
        })
        setInputValue("")
    }

    const removeTodo = (id) => {
        setToDo((todos) => { return todos.filter(t => t.id != id) })
    }
    return (
        <div className='container'>
            <input type="text" placeholder='enter your to do' value={inputValue} onChange={handleChange} />
            <button onClick={handleSubmit}>Add</button>

            <ul className='todos-list'>
                {toDo.map(({ value, id }) => (
                    <li id={id} className='todo'>
                        <span style={{ color: 'black' }}>{value}</span>
                        <button className='close' onClick={() => removeTodo(id)} >x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
