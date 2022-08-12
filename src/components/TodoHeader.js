import React from "react";

const TodoHeader = ({ loading }) => {

	return (
		<header className="header">
			<h2 className={`title ${!!loading && "loading"}` }>
				TODO
			</h2>

			<i className="header--icon"></i>
		</header>
	)
}


export { TodoHeader }
  