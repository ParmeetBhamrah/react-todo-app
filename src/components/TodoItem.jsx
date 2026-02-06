import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
    return (
    <li className='bg-gray-50 px-3 py-2 rounded-md flex justify-between items-center'>
        <span>{todo.text}</span>
        <button
            onClick={() => onDelete(todo.id)}
            className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600'
        >
            Delete
        </button>
    </li>
    )
}

export default TodoItem