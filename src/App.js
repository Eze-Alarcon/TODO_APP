import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoFilter } from "./TodoFilter";
import "./App.css"
import { useState } from "react";

const defaultTodos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Terminar curso", completed: false },
	{ text: "Algo mas para hacer", completed: true },
]


function App() {
	const [todos, setTodos] = useState(defaultTodos)
	const [searchValue, setSearchValue] = useState('')
	
	const completedTodos = todos.filter(todo => !!todo.completed).length // !! === true
	const totalTodos = todos.length

	let searchedTodos = [];

	if (!(searchValue.length >= 3)) {
		searchedTodos = todos
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase()
			const searchText = searchValue.toLowerCase()
			return todoText.includes(searchText)
		})
	}

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
			{
				searchedTodos.map((todo) => (
					<TodoItem text={todo.text} 
					key={todo.text}
					completed={todo.completed}/>
				))
			}
		</TodoList>
		
		<TodoFilter/>
		
	</section>
	</>
	);
}

export default App;
