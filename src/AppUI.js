import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoFilter } from "./components/TodoFilter";

const AppUI = ({
		loading,
		error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }) => {
    
    return (
    <> 

	<TodoCounter 
		total={totalTodos}
		completed={completedTodos}
	/>

	<section className="interactionContainer">
		<article className="inputContainer">
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				/>
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
	</>
    )
}

export { AppUI }