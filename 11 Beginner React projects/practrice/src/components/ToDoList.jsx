import React, { useState } from 'react'

const ToDoList = () => {

    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = () => {
        setList(()=>
            list.concat( {
            id: Math.random(),
            item: inputValue
        }));
        
        setInputValue("")
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const removeToDo = (id) => {

        setList( () =>{ 
            return list.filter((ele) => ele.id != id)
        })
    }
    return (
        <div>

            <input type="text" placeholder='Enter a todo' value={inputValue} onChange={handleChange} />
            <button onClick={handleSubmit}>submit</button>

            <ul>
                {list.map(({id,item}) => (
                    <li key={id}>
                        <span>{item}</span>
                        <button onClick={() => removeToDo(id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
