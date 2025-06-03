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
            <h1 className="text-[100px] text-rose-800 font-light text-center opacity-18">todos</h1>
            <div className="mx-auto max-w-xl shadow-md mt-10 bg-white">
                <AddTodo onAdd={handleAddTodo} />
            </div>
        </div>
    )
}

export default App;
