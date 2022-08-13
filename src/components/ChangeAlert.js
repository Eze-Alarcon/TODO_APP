import { useStorageListener } from "./HOC/useStorageListener";
import { AlertContainerStyle, AlertStyle, FormButton } from "./styled/StyledComponent";

const ChangeAlert = ({ sync }) => {

    const { show, toggleShow } = useStorageListener(sync)

    if (show) {
        return (
            <AlertStyle>
                <AlertContainerStyle>
                <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                <p>¿Quieres sincronizar tus TODOs?</p>
                <FormButton
                    className="add"
                    onClick={toggleShow}
                >
                    Yes!
                </FormButton>
                </AlertContainerStyle>
            </AlertStyle>
        );
    } else {
        return null;
    }

} 

export { ChangeAlert }