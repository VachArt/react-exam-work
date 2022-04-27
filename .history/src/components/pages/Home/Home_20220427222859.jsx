import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
    {   
        _id: "efnejhj",
        title: "Купить продукты для банкета",
        isCompleted: false,
    },
    {   
        _id: "efnejhrrrr",
        title: "Заехать за посылками",
        isCompleted: false,
    },
    {
        _id: "efnejhj2323",
        title: "Забрать телефон из ремонта",
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

    const addTodo = (title) => {
        setTodos([
            {
                _id: new Date(),
                title,
                isCompleted: false
            },
            ...todos,
        ])
    }

    window.addTodo = addTodo

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-8'>Random Title</h1>
            {todos.map(todo => ( 
                <TodoItem 
                    key={todo._id} 
                    todo={todo} 
                    changeTodo={changeTodo} 
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodoField addTodo={addTodo} />
        </div>
    )
}

export default Home