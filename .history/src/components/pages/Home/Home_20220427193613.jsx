import React, { useState } from 'react'
import TodoItem from './item/TodoItem'

const data = [
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
    const [todos] = useState(data)

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-8'>Random Title</h1>
            {data.map(todo => ( 
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    )
}

export default Home