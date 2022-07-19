import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


const TodoCounter = () => {

	const { totalTodos, completedTodos} = useContext(TodoContext)


	return (
		<h2 className="title">{`Has completado ${completedTodos} de ${totalTodos} TODOs`}</h2>
	)
}


export { TodoCounter }
  