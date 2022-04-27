import React from 'react'
import Check from './Check'

const TodoItem = ({todo, changeTodo}) => {
    return (
        <button className='flex items-center mb-4 rounded-2xl bg-gray-800 p-5 w-full'
            onClick={() => changeTodo(todo._id)}
        >
            <Check isComleted={todo.isComleted}/>
            {todo.title}
        </button>
    )
}



export default TodoItem

