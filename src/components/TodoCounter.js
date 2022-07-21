import React from "react";

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {

	return (
		<h2 className={`title ${!!loading && "loading"}` }>
			{`Has completado ${completedTodos} de ${totalTodos} TODOs`}
		</h2>
	)
}


export { TodoCounter }
  