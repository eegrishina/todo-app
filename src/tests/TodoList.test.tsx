import { test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from "../components/TodoList";
import { vi } from 'vitest';

const todos = [
    {
        id: "001",
        text: "Taks 1",
        completed: false,
    },
    {
        id: "002",
        text: "Taks 2",
        completed: true,
    },
    {
        id: "003",
        text: "Taks 3",
        completed: false,
    },
];

test("Render todo list", () => {
    render(<TodoList list={todos} onToggle={() => { }} />);

    expect(screen.getByText("Taks 1")).toBeInTheDocument();
    expect(screen.getByText("Taks 2")).toBeInTheDocument();
    expect(screen.getByText("Taks 3")).toBeInTheDocument();
});

test("User can mark task as completed", () => {
    const onToggle = vi.fn();

    render(<TodoList list={todos} onToggle={onToggle} />);

    const checkboxes = screen.getAllByRole("checkbox");

    fireEvent.click(checkboxes[0]);
    expect(onToggle).toHaveBeenCalledWith("001");
    fireEvent.click(checkboxes[1]);
    expect(onToggle).toHaveBeenCalledWith("002");
    fireEvent.click(checkboxes[2]);
    expect(onToggle).toHaveBeenCalledWith("003");

    expect(onToggle).toHaveBeenCalledTimes(3);
});
