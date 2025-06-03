import type { Todo } from "../types";

interface TodoListProps {
    list: Todo[],
    onToggle: (id: string) => void,
}

export default function TodoList({ list, onToggle }: TodoListProps) {
    return (
        <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {list.map((todo) => (
                <li
                    key={todo.id}
                    className="flex items-center px-4 py-3 gap-3 hover:bg-gray-50 transition"
                >
                    <label className="flex items-center gap-5 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                            className="sr-only"
                        />
                        <span
                            className={`min-w-7 min-h-7 rounded-full border-2 transition 
                                ${todo.completed ? "border-green-700" : "border-gray-400"}`}
                        >
                            {todo.completed && (
                                <svg
                                    className="w-6 h-6 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="green"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </span>
                        <span
                            className={`text-2xl font-light break-words
                                ${todo.completed ? "line-through text-gray-300" : "text-gray-600"}`}
                        >
                            {todo.text}
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    );
}

