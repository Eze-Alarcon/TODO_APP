
const TodoList = (props) => {
    return(
        <section className="todoListContainer">



            <ul className="todoList">

                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos()}
                
                {props.searchedTodos.map(props.render)}
                {/* Lo de arriba es lo mismo que: */}
                {/* {props.searchedTodos.map( todo => props.render(todo))} */}


                {props.children}
            </ul>
            <div className="todoListFooter">
                <p>5 items restantes</p>
                <p>Quitar Completados</p>
            </div>
        </section>
    );
}

export { TodoList};