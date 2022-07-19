import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


const TodoSearch = () => {

	const { searchValue, setSearchValue } = useContext(TodoContext)

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value)
	}

  	return (
		<input 
			className="input" 
			placeholder="Buscador de TODOs"
			value={searchValue}
			onChange={onSearchValueChange} />
	)
}
  

export { TodoSearch }