const TodoCounter = ({ totalTodos, completedTodos, loading, deleteCompletedTodos }) => {

    return (
        <>

        {
            (loading) 
            ? <p>Cargando</p>
            : 
                <>
                    <p>{completedTodos} items {totalTodos} completados</p>
                    <p onClick={deleteCompletedTodos}>Quitar Completados</p>
                </>
        }

        </>
    )
}

export { TodoCounter }