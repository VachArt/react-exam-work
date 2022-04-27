import React from 'react'
import TodoItem from './item/TodoItem'

const todo = [
    {   
        _id: "efnejhj",
        title: "Finish essay collaboration",
        isCompleted: false,
    },
    {   
        _id: "efnejhrrrr",
        title: "Read next chapter of the bok in Danish",
        isCompleted: false,
    },
    {
        _id: "efnejhj2323",
        title: "Do the math for next monday",
        isCompleted: false,
    }
]

const Home = () => {
    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-8'>Random Title</h1>
            {todo.map(todo => ( 
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    )
}

export default Home