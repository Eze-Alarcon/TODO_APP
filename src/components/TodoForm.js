import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"



const TodoForm = () => {
    const [newTodoValue, setNewTodoValue ] = useState('')

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)


    const onChange = (event) => {
        setNewTodoValue(() => event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }


    return (
        <div className="TodoFormContainer">
            <form onSubmit={onSubmit} className="TodoForm" >
                <label>
                    Escribe tu nuevo TODO
                </label>
                <textarea 
                    placeholder="Cortar la cebolla"
                    value={newTodoValue} 
                    onChange={onChange}   
                />
                <div className="TodoForm-buttonContainer">
                    <button
                        className="TodoForm-button TodoForm-button--cancel"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        type="submit"
                    >
                        Añadir
                    </button>
                </div>
            </form>
        </div>
    )
}

export { TodoForm }