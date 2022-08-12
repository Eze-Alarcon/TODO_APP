import { useState } from "react"
import { ButtonsContainer, FormButton, FormContainerStyle, FormStyle } from "./styled/StyledComponent"



const TodoForm = ({ addTodo, setOpenModal }) => {
    const [newTodoValue, setNewTodoValue ] = useState('')

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
        <FormContainerStyle>
            <FormStyle onSubmit={onSubmit} >
                <label>
                    Escribe tu nuevo TODO
                </label>
                <textarea 
                    placeholder="Cortar la cebolla"
                    value={newTodoValue} 
                    onChange={onChange}   
                />
                <ButtonsContainer>
                    <FormButton
                        className="cancel"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancelar
                    </FormButton>
                    <FormButton
                        className="add"
                        type="submit"
                    >
                        Añadir
                    </FormButton>
                </ButtonsContainer>
            </FormStyle>
        </FormContainerStyle>
    )
}

export { TodoForm }