import { ErrorTodoStyle } from "./styled/StyledComponent"

const TodosError = ({ error })  => {
    return (
        <ErrorTodoStyle>
            <p className="text">Lo sentimos, ha ocurrido un error, por favor, recarga la pagina.</p>
        </ErrorTodoStyle>
    )
}

export { TodosError }