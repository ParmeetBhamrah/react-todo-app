import TodoItem from "./TodoItem"

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
    return (
    <ul className="space-y-2">
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} onToggle={onToggleTodo} />
        ))}
    </ul>
    )
}

export default TodoList