import React from 'react'
import Check from './Check'
import cn from 'classnames'
import {BsTrash} from 'react-icons/bs'

const TodoItem = ({todo, changeTodo}) => {
    return (
        <button className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'
            onClick={() => changeTodo(todo._id)}
        >
            <Check isCompleted={todo.isCompleted} />
            <span className='flex items-center'> 
                <span 
                    className={cn({
                        'line-through': todo.isCompleted,
                    })}
                >
                    {todo.title}
                </span>
            </span> 
            <BsTrash size={22} className='text-gray-900' />
        </button>
    )   
}



export default TodoItem

