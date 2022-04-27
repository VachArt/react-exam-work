import React from 'react'
import Check from './Check'

const TodoItem = ({todo}) => {
    return (
        <button className='flex items-center mb-4 rounded-2xl bg-gray-800 p-5'>
            <Check />
            {todo.title}
        </button>
    )
}



export default TodoItem

