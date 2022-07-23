import React from "react";
import { useStorageListener } from "./HOC/useStorageListener";

const ChangeAlert = ({ sync }) => {

    const { show, toggleShow } = useStorageListener(sync)

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlertContainer">
                <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                <p>¿Quieres sincronizar tus TODOs?</p>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    onClick={toggleShow}
                >
                    Yes!
                </button>
                </div>
            </div>
        );
    } else {
        return null;
    }

} 

export { ChangeAlert }