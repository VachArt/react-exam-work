import React from "react"

const todos = [
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
        <div className="bg-gray-900 h-screen text-white">
            {todos.map(todo => ( 
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    )
}

export default Home