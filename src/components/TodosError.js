const TodosError = ({ error })  => {
    return (
        <li className="errorTodo">
            <p className="text">Lo sentimos, ha ocurrido un error, por favor, recarga la pagina.</p>
        </li>
    )
}

export { TodosError }