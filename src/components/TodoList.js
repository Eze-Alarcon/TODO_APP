
const TodoList = (props) => {
    return(
        <section className="todoListContainer">



            <ul className="todoList">

                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

                {
                    (!!props.totalTodos &&  !props.searchedTodos.length) && props.onEmptySearchResults()
                }


                {/* {props.searchedTodos.map(props.render)} */}
                {/* Lo de arriba es lo mismo que: */}
                {/* {props.searchedTodos.map( todo => props.render(todo))} */}

                {/* {props.searchedTodos.map(props.children)} */} {/* Asi se ejecuta la render function */}

                {(!props.error && !props.loading) && props.searchedTodos.map(props.render || props.children)} {/* De esta forma podemos ejecutar uno o el otro dependiendo de que nos envia el componente padre */}

            </ul>
            <div className="todoListFooter">
                <p>5 items restantes</p>
                <p>Quitar Completados</p>
            </div>
        </section>
    );
}

export { TodoList};