import "./App.css"

// Custom Hook
import { useTodos } from "./customHooks/useTodos_v2";

// Components
import { TodoHeader } from "./components/TodoHeader";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoFilter } from "./components/TodoFilter";
import { Modal } from "./components/Modal"; 
import { TodoForm } from "./components/TodoForm";
import { TodosError } from "./components/TodosError";
import { TodosLoading } from "./components/TodosLoading";
import { EmptyTodos } from "./components/EmptyTodos";
import { EmptyResults } from "./components/EmptyResults";
import { ChangeAlert } from "./components/ChangeAlert";


const App = () =>{

	const { state, stateUpdaters } = useTodos()

	const {
		error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        openModal,
        searchedTodos,
		selection,
	} = state
	

	const { 
		setSearchValue,
		addTodo,
		completeTodo,
		deleteTodo,
		setOpenModal,
		sincronizeTodos,
		deleteCompletedTodos,
		setSelection,
	} = stateUpdaters


	return (
    <> 

	<TodoHeader 
		loading={loading}
	/>

	<section className="interactionContainer">
		<article className="inputContainer">
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				loading={loading}
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

			renderCounter={
				() => ( <TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
					loading={loading}
					deleteCompletedTodos={deleteCompletedTodos}
				/> )}
			
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
		
			{/* Fin del TodoList (no es un nuevo componente) */}
		</TodoList>


		<TodoFilter
			selection={selection}
			setSelection={setSelection}
		/> 


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

	<ChangeAlert sync={sincronizeTodos} />

	</>
    )
}

export default App;
