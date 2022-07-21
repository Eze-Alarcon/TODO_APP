import React from "react";

const TodoCounter = ({ totalTodos, completedTodos }) => {

	return (
		<h2 className="title">{`Has completado ${completedTodos} de ${totalTodos} TODOs`}</h2>
	)
}


export { TodoCounter }
  