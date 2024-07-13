import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaPlus } from "react-icons/fa"
import { IoMdClose } from "react-icons/io";
const Todos = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        if (todos.includes(todo)) {
            return toast.error("Task already exist.")
        }

        setTodos([...todos, todo])
        setTodo('')
        toast.success("Task added.")
    }
    const removeTodo = (idx) => {
        setTodos(todos.filter((todo, index) => index != idx))
    }
    const handleKeyUp = (e) => {
        if (e.key == "enter") {
            if (todos.includes(todo)) {
                return toast.error("Task already exist.")
            }

            setTodos([...todos, todo])
            setTodo('')
            toast.success("Task added.")
        }
    }
    return (
        <div className='container'>
            <h2>You can manage your task here.</h2>
            <div className='input'>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} onKeyUp={handleKeyUp} />

                <FaPlus onClick={addTodo} />

            </div>

            <ul>
                {
                    todos.map((todo, index) => {
                        return <li key={index}> {index}.{todo}
                            <IoMdClose onClick={() => removeTodo(index)} />
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default Todos
