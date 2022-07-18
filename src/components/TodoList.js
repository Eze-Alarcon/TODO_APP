
const TodoList = (props) => {
    return(
        <section className="todoListContainer">
            <ul className="todoList">
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