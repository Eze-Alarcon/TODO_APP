import "./App.css"
import { useTodos } from "./customHooks/useTodos";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoFilter } from "./components/TodoFilter";
import { Modal } from "./components/Modal"; 
import { TodoForm } from "./components/TodoForm";
import { TodosError } from "./components/TodosError";
import { TodosLoading } from "./components/TodosLoading";
import { EmptyTodos } from "./components/EmptyTodos";
import { EmptyResults } from "./components/EmptyResults";



const App = () =>{

	const { 
		error, 
		loading, 
		searchedTodos, 
		completeTodo, 
		deleteTodo,
		openModal,
		setOpenModal,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		addTodo,
	} = useTodos()

	return (
    <> 

	<TodoCounter 
		totalTodos={totalTodos}
		completedTodos={completedTodos}
	/>

	<section className="interactionContainer">
		<article className="inputContainer">
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<CreateTodoButton 
			setOpenModal={setOpenModal} />
		</article>

		<TodoList
			error={error}	
			loading={loading}
			searchedTodos={searchedTodos}
			totalTodos={totalTodos}
			onError={() => <TodosError/>}
			onLoading={() => <TodosLoading/>}
			onEmptyTodos={() => <EmptyTodos/>}
			onEmptySearchResults={
				() => <EmptyResults searchText={searchValue}/>
			}
			/* render={todo => (
				<TodoItem 
					text={todo.text} 
					key={todo.text}
					completed={todo.completed}
					onComplete={() => completeTodo(todo.text)}
					onDelete={() => deleteTodo(todo.text)}
				/>
			)} */
		>

		{todo => (
			<TodoItem 
				text={todo.text} 
				key={todo.text}
				completed={todo.completed}
				onComplete={() => completeTodo(todo.text)}
				onDelete={() => deleteTodo(todo.text)}
			/>
		)}
		
		</TodoList>

		<TodoFilter/>


	</section>

	{
		(!!openModal) && (
			<Modal>
				<TodoForm 
				addTodo={addTodo}
        		setOpenModal={setOpenModal}
		/>
			</Modal>
		)
	}

	</>
    )
}

export default App;
