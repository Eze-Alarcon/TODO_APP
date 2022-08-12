import React from "react";
import { InputStyled } from "./styled/StyledComponent";


const TodoSearch = ({ searchValue, setSearchValue, loading }) => {

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value)
	}

  	return (
		<InputStyled 
			placeholder="Buscador de TODOs"
			value={searchValue}
			onChange={onSearchValueChange} 
			disabled={loading}
		/>
	)
}
  

export { TodoSearch }