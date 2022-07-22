import React from "react";
import { withStorageListener } from "./HOC/withStorageListener";

const ChangeAlert = ({ show, toggleShow }) => {

    if (show) {
        return <p>Hubo cambios?</p>
    }

} 

const ChangeAlertwithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertwithStorageListener }