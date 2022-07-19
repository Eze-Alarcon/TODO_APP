import React, { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoFilter } from "./components/TodoFilter";
import { Modal } from "./components/Modal"; 

/* 
{
	loading,
	error,
	totalTodos,
	completedTodos,
	searchValue,
	setSearchValue,
	searchedTodos,
	completeTodo,
	deleteTodo,
}
*/

const AppUI = () => {

	
	const { 
		error, 
		loading, 
		searchedTodos, 
		completeTodo, 
		deleteTodo
	} = useContext(TodoContext)


    
    return (
    <> 

	<TodoCounter />

	<section className="interactionContainer">
		<article className="inputContainer">
			<TodoSearch/>
			<CreateTodoButton />
		</article>

		<TodoList>
			{/* Estados de carga de la aplicacion: */}
			{error && <p>Hubo un error...</p>}
			{loading && <p>Estamos cargando</p>}

			{/* Si no esta cargando y no hay todos (lenght === 0) */}
			{(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}



			{
				searchedTodos.map((todo) => (
					<TodoItem text={todo.text} 
					key={todo.text}
					completed={todo.completed}
					onComplete={() => completeTodo(todo.text)}
					onDelete={() => deleteTodo(todo.text)}
					/>
				))
			}
		</TodoList>
		
		<TodoFilter/>

	</section>

	<Modal>
		<p>HOliwisfbaubndasdsa</p>
	</Modal>

	</>
    )
}

export { AppUI }