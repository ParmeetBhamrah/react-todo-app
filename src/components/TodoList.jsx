import TodoItem from "./TodoItem"

function TodoList({ todos, onDeleteTodo }) {
    return (
    <ul className="space-y-2">
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo}/>
        ))}
    </ul>
    )
}

export default TodoList