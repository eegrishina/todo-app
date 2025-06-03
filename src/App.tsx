import { useState } from "react";
import type { Todo } from './types';
import AddTodo from './components/AddTodo';
import TodoList from "./components/TodoList";
import TodoOptions from "./components/TodoOptions";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    const incompletedTodos = todos.filter(todo => !todo.completed);

    const handleAddTodo = (text: string) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const handleToggle = (id: string) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    };

    const handleClear = () => {
        setTodos(todos.map(todo => ({ ...todo, completed: false })));
    };

    return (
        <div>
            <h1 className="text-[100px] text-rose-800 font-light text-center">todos</h1>
            <div className="mx-auto max-w-xl shadow-md mt-3 bg-white">
                <AddTodo onAdd={handleAddTodo} />
                <TodoList list={filteredTodos} onToggle={handleToggle} />
                {todos.length > 0 &&
                    <TodoOptions
                        incompleted={incompletedTodos.length}
                        currentFilter={filter}
                        onChangeFilter={setFilter}
                        onClear={handleClear}
                    />
                }
            </div>
        </div>
    )
}

export default App;
