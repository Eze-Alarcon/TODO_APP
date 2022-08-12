import { FilterItem, TodoFilterStyled } from "./styled/StyledComponent"

const TodoFilter = ({selection, setSelection}) => {
    return (
        <>
            <TodoFilterStyled>
                <FilterItem 
                    className={(selection === "all") ? "active" : "" } 
                    onClick={() => setSelection("all") } 
                >
                    Todos
                </FilterItem>
                <FilterItem 
                    className={(selection === "active") ? "active" : "" }
                    onClick={() => setSelection("active") } 
                >
                        Activos
                </FilterItem>
                <FilterItem 
                    className={(selection === "completed") ? "active" : "" }
                    onClick={() => setSelection("completed") } 
                >
                        Completados
                </FilterItem>
            </TodoFilterStyled>
        </>
    )
}

export { TodoFilter }