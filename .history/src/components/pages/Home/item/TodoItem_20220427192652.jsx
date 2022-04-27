import React from 'react'
import Check from './Check'

const TodoItem = ({todo}) => {
    return (
        <div className='flex items-center'>
            <Check />
            {todo.title}
        </div>
    )
}



export default TodoItem

