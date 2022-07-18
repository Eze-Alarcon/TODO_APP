import "./App.css"
import { useEffect, useState } from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
// 	{ text: "Cortar cebolla", completed: false },
// 	{ text: "Terminar curso", completed: false },
// 	{ text: "Algo mas para hacer", completed: false },
// 	{ text: "LALALALA", completed: true },
// ]


// itemName = nombre del item en el Local Storage (LS)
// initialValue = valor inicial del dato a guardar en el LS
function useLocalStorage(itemName, initialValue) {
	// estados de carga: loading y error
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)


	const [item, setItem] = useState(initialValue)
	

	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName)
				let parsedItem;
				
				// verificamos si el usuario es nuevo o ya tiene todos guardados

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue))
					parsedItem = []
				} else {
					parsedItem = JSON.parse(localStorageItem)
				}

				setItem(parsedItem)
				setLoading(false)
			} catch (err) {
				setError(err)
			}
		}, 2000)
	})


	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem)
			localStorage.setItem(itemName, stringifiedItem)
			setItem(newItem)
		} catch (err) {
			setError(err)
		}
	}

	return {
		item,
		saveItem,
		loading,
		error,
	} // forma de consumir el Custom Hook
}




function App() {
	// Llamado a nuestro Custom Hook
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', [])

	
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


	// useEffect(() => {

	// }, [])




	return (
		<AppUI 
			error={error}
			loading={loading}
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
