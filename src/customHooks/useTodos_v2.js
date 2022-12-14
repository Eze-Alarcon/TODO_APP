import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage_v2'


const useTodos = () => {

    // Llamado a nuestro Custom Hook
	const {
		item: todos,
		saveItem: saveTodos,
		sincronize: sincronizeTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', [])

	const [searchValue, setSearchValue] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const [selection, setSelection] = useState("all")
	
	const completedTodos = todos.filter(todo => !!todo.completed).length
	const totalTodos = todos.length

	let searchedTodos = [];


	if (selection === "active") {
		searchedTodos = todos.filter(todo => !todo.completed)
	} else if (selection === "completed") {
		searchedTodos = todos.filter(todo => !!todo.completed)
	} else {
		searchedTodos = todos
	}


	if ((searchValue.length >= 3)) {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase()
			const searchText = searchValue.toLowerCase()
			return todoText.includes(searchText)
		})
	}


	const addTodo = (text) => {
		const newTodos = [...todos]
		newTodos.push({
			completed: false,
			text,
		})
		saveTodos(newTodos)
	}



	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text)
		const newTodos = [...todos]

		if (newTodos[todoIndex].completed) {
			newTodos[todoIndex].completed = false
		}
		else {
			newTodos[todoIndex].completed = true
		}
		saveTodos(newTodos)
	}


	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text)
		const newTodos = [...todos]
		newTodos.splice(todoIndex, 1)
		saveTodos(newTodos)
	}

	const deleteCompletedTodos = () => {
		const uncompletedTodos = todos.filter(todo => !todo.completed)
		saveTodos(uncompletedTodos)
	}





    const state = {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        openModal,
        searchedTodos,
		selection,
    }

    const stateUpdaters =  {
		setSearchValue,
		addTodo,
		completeTodo,
		deleteTodo,
		setOpenModal,
		sincronizeTodos,
		deleteCompletedTodos,
		setSelection
	}

    return { state, stateUpdaters }
}

export { useTodos }