import "./App.css"
import { TodoProvider } from "./context/TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
// 	{ text: "Cortar cebolla", completed: false },
// 	{ text: "Terminar curso", completed: false },
// 	{ text: "Algo mas para hacer", completed: false },
// 	{ text: "LALALALA", completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))


const App = () =>{

	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
