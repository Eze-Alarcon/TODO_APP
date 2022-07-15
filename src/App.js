import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoFilter } from "./TodoFilter";
import "./App.css"

const todos = [
	{ text: "Cortar cebolla", completed: false },
	{ text: "Terminar curso", completed: false },
	{ text: "Algo mas para hacer", completed: false },
	{ text: "Terminar curso", completed: false }
]



function App() {
	return (
	<> 

	<TodoCounter />

	<section className="interactionContainer">
		<article className="inputContainer">
			<TodoSearch />
			<CreateTodoButton />
		</article>

		<TodoList>
			{
				todos.map((todo) => (
					<TodoItem text={todo.text} 
					key={todo.text}
					completed={todo.completed}/>
				))
			}
		</TodoList>
		
		<TodoFilter/>
		
	</section>
	</>
	);
}

export default App;
