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
		newTodos[todoIndex].completed = true
		saveTodos(newTodos)
	}


	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text)
		const newTodos = [...todos]
		newTodos.splice(todoIndex, 1)
		saveTodos(newTodos)
	}


    /* 
        Actualizaremos el return de este custom hook dado que es 
        bastante complejo, para ello, lo dividiremos usando objetos
    */

    const state = {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        openModal,
        searchedTodos,
    }

    const stateUpdaters =  {
		setSearchValue,
		addTodo,
		completeTodo,
		deleteTodo,
		setOpenModal,
		sincronizeTodos,
	}

    return { state, stateUpdaters }
}

export { useTodos }