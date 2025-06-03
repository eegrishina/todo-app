interface TodoOptionsProps {
    incompleted: number,
    currentFilter: "all" | "active" | "completed",
    onChangeFilter: (filter: "all" | "active" | "completed") => void,
    onClear: () => void,
}

export default function TodoOptions({ incompleted, currentFilter, onChangeFilter, onClear }: TodoOptionsProps) {
    const filters: Array<"all" | "active" | "completed"> = ["all", "active", "completed"];

    return (
        <div className="flex justify-between items-center font-light text-gray-400 p-4">
            <p className="text-green-700">
                {incompleted} {incompleted === 1 ? "item" : "items"} left!
            </p>

            <div className="flex justify-between items-center gap-4">
                {filters.map(filter => {
                    const isActive = currentFilter === filter;
                    return (
                        <button
                            key={filter}
                            onClick={() => onChangeFilter(filter)}
                            className={`px-3 py-1 rounded text-sm capitalize cursor-pointer select-none border border-white ${isActive
                                ? "bg-rose-800 text-white border-rose-800"
                                : "hover:border-rose-800 hover:text-gray-600"}`}
                        >
                            {filter}
                        </button>
                    )
                })}
            </div>

            <button
                className="cursor-pointer select-none hover:text-gray-600"
                onClick={onClear}
            >
                Clear complited
            </button>
        </div>
    )
}
