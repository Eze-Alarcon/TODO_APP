import React from "react";
import { withStorageListener } from "./HOC/withStorageListener";

const ChangeAlert = ({ show, toggleShow }) => {

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

const ChangeAlertwithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertwithStorageListener }