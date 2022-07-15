const TodoItem = (props) =>{
    return(
        <li className="todoItem">
            <i className="icon-check"></i>
            <p className="text">{props.text}</p>
            <i class="icon-delete"></i>
        </li>
    );
}

export { TodoItem };