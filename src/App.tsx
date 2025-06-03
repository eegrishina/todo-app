import { useState } from "react";
import type { Todo } from './types';
import AddTodo from './components/AddTodo';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (text: string) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    }

    return (
        <div>
            <h1>todos</h1>
            <AddTodo onAdd={handleAddTodo} />
        </div>
    )
}

export default App;
