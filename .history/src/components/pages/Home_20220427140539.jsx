import React from "react"

const todos = [
    {
        title: "Finish essay collaboration",
        isCompleted: false,
    },
    {
        title: "Read next chapter of the bok in Danish",
        isCompleted: false,
    },
    {
        title: "Do the math for next monday",
        isCompleted: false,
    }
]

const Home = () => {
    return (
        <div className="bg-gray-900 h-screen text-white">
            {todos.map(todo => ( 
                <div>{todo.title}</div>
            ))}
        </div>
    )
}

export default Home