import { useState } from "react"

const TodoInput = ({ onAddTodo }) => {
    const [text, setText] = useState("")

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleAdd() {
        if (text.trim() === "") return
        onAddTodo(text)
        setText("")
    }

    return (
    <div className="flex gap-2 mb-4">
        <input 
            className="flex-1 border rounded-md px-3 py-2 focus:outline-none"
            type="text" 
            value = {text}
            onChange={handleChange}
            placeholder="Enter a todo"
        />
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition "
        onClick={handleAdd}>Add</button>
    </div>
    )
}

export default TodoInput