import React from "react";
import { withStorageListener } from "./HOC/withStorageListener";

const ChangeAlert = ({ show, toggleShow }) => {

    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Volver a cargar la informacion
                </button>
            </div>
        )
    } else {
        return null;
    }

} 

const ChangeAlertwithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertwithStorageListener }