import "./App.css"
import { useState } from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
// 	{ text: "Cortar cebolla", completed: false },
// 	{ text: "Terminar curso", completed: false },
// 	{ text: "Algo mas para hacer", completed: false },
// 	{ text: "LALALALA", completed: true },
// ]


function App() {
	const localStorageTodos = localStorage.getItem('TODOS_V1')
	let parsedTodos;

	// verificamos si el usuario es nuevo o ya tiene todos guardados
	if (!localStorageTodos) {
		localStorage.setItem('TODOS_V1', JSON.stringify([]))
		parsedTodos = []
	} else {
		parsedTodos = JSON.parse(localStorageTodos)
	}

	const [todos, setTodos] = useState(parsedTodos)
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


	const saveTodos = (newTodos) => {
		const stringifiedTodos = JSON.stringify(newTodos)
		localStorage.setItem('TODOS_V1', stringifiedTodos)
		setTodos(newTodos)
	}

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text)
		const newTodos = [...todos]
		newTodos[todoIndex].completed = true
		saveTodos(newTodos)
	}


	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text)
		const newTodos = [...todos]
		newTodos.splice(todoIndex, 1)
		saveTodos(newTodos)
	}


	return (
		<AppUI 
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
	);
}

export default App;
