import type { Todo } from "../types";

interface TodoListProps {
    list: Todo[],
    onToggle: (id: string) => void,
}

export default function TodoList({ list, onToggle }: TodoListProps) {
    return (
        <ul>
            {list.map((todo) => (
                <li key={todo.id}>
                    <div>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />
                        <label>{todo.text}</label>
                    </div>
                </li>
            ))}
        </ul>
    )
}
