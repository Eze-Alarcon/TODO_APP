const EmptyResults = ({ searchText })  => {
    return (
        <li className="firstTodo">
            <p className="text">No se encuentran TODOs de {searchText}.</p>
        </li>
    )
}

export { EmptyResults }