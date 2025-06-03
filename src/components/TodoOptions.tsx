interface TodoOptionsProps {
    incompleted: number,
    currentFilter: "all" | "active" | "completed",
    onChangeFilter: (filter: "all" | "active" | "completed") => void,
    onClear: () => void,
}

export default function TodoOptions({ incompleted, currentFilter, onChangeFilter, onClear }: TodoOptionsProps) {
    return (
        <div>
            <p>{incompleted} {incompleted === 1 ? "item" : "items"} left!</p>
            <div>
                <button onClick={() => onChangeFilter("all")}>
                    All
                </button>
                <button onClick={() => onChangeFilter("active")}>
                    Active
                </button>
                <button onClick={() => onChangeFilter("completed")}>
                    Completed
                </button>
            </div>
            <button onClick={onClear}>Clear complited</button>
        </div>
    )
}
