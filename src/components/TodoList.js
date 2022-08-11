const TodoList = (props) => {
    return(
        <section className="todoListContainer">



            <ul className="todoList">

                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

                {
                    (!!props.totalTodos &&  !props.searchedTodos.length) 
                        && props.onEmptySearchResults()
                }

                {(!props.error && !props.loading) 
                    && props.searchedTodos.map(props.render || props.children)} 

            </ul>
            <div className="todoListFooter">
                { props.renderCounter() }
            </div>
        </section>
    );
}

export { TodoList};