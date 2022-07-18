import React from "react";


const TodoCounter = ({ total, completed}) => {

	return (
		<h2 className="title">{`Has completado ${completed} de ${total} TODOs`}</h2>
	)
}


export { TodoCounter }
  