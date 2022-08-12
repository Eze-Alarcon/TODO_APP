import { TodoListContainer, TodoListFooter, TodoListStyled } from "./styled/StyledComponent";

const TodoList = (props) => {
    return(
        <TodoListContainer>



            <TodoListStyled>

                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

                {
                    (!!props.totalTodos &&  !props.searchedTodos.length) 
                        && props.onEmptySearchResults()
                }

                {(!props.error && !props.loading) 
                    && props.searchedTodos.map(props.render || props.children)} 

            </TodoListStyled>
            <TodoListFooter>
                { props.renderCounter() }
            </TodoListFooter>
        </TodoListContainer>
    );
}

export { TodoList};