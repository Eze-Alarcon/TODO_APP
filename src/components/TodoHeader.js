import React from "react";

const TodoHeader = ({ loading }) => {

	return (
		<h2 className={`title ${!!loading && "loading"}` }>
			TODO APP
		</h2>
	)
}


export { TodoHeader }
  