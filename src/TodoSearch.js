import React from "react";


const TodoSearch = ( {searchValue, setSearchValue }) => {

	const onSearchValueChange = (event) => {
		console.log(event.target.value)
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