import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from "../App";

test("User can add a new task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done/i);
    fireEvent.change(input, { target: { value: "Complete test task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Complete test task")).toBeInTheDocument();
});

test("Filter shows only active tasks", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/What needs to be done/i);
    fireEvent.change(input, { target: { value: "Done" } });
    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.change(input, { target: { value: "Todo" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    fireEvent.click(screen.getByText(/active/i));

    expect(screen.queryByText("Done")).not.toBeInTheDocument();
    expect(screen.getByText("Todo")).toBeInTheDocument();
});
