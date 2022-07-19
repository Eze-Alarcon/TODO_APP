import "./App.css"
import { TodoProvider } from "./context/TodoContext";
import { AppUI } from "./AppUI";

const App = () =>{

	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
