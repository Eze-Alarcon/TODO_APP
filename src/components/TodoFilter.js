const TodoFilter = ({selection, setSelection}) => {
    return (
        <>
            <article className="todoFilter">
                <p 
                    className={(selection === "all") ? "filter active" : "filter" } 
                    onClick={() => setSelection("all") } 
                >
                    Todos
                </p>
                <p 
                    className={(selection === "active") ? "filter active" : "filter" }
                    onClick={() => setSelection("active") } 
                >
                        Activos
                </p>
                <p 
                    className={(selection === "completed") ? "filter active" : "filter" }
                    onClick={() => setSelection("completed") } 
                >
                        Completados
                </p>
            </article>
        </>
    )
}

export { TodoFilter }