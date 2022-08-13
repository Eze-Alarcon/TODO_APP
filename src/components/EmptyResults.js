import { FirstTodoStyle } from "./styled/StyledComponent"

const EmptyResults = ({ searchText })  => {
    return (
        <FirstTodoStyle>
            {
                (!!searchText) 
                    ? <p className="text">No se encuentran TODOs de {searchText}.</p>
                    : <p className="text">No se encuentran TODOs con los parametros indicados.</p>
            }
        </FirstTodoStyle>
    )
}

export { EmptyResults }