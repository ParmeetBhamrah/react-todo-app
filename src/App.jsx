import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const FILTERS = {
    ALL: "All",
    ACTIVE: "Active",
    COMPLETED: "Completed",
  }

  const [filter, setFilter] = useState(FILTERS.ALL)

  const visibleTodos = todos.filter(todo => {
    if (filter === FILTERS.ACTIVE) return !todo.done
    if (filter === FILTERS.COMPLETED) return todo.done
    return true
  })

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(prevTodos => prevTodos.map(todo =>
      todo.id === id? {...todo, done: !todo.done} : todo))
  }

  function deleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Todo App
        </h1>
        <TodoInput onAddTodo={addTodo} />
        <div className="flex justify-center gap-2 mb-4">
          {Object.values(FILTERS).map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-md ${filter === f ? "bg-blue-500 text-white" : ""}`}
              >
              {f}
            </button>
          ))}
        </div>
        <TodoList todos={visibleTodos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
      </div>
    </div>
  );
}

export default App;
