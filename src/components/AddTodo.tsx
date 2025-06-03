import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

interface AddTodoProps {
    onAdd: (text: string) => void,
}

export default function AddToto({ onAdd }: AddTodoProps) {
    const [text, setText] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    }

    return (
        <input
            type="text"
            value={text}
            placeholder="What needs to be done?"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}
