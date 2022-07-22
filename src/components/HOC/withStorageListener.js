import React, { useState } from 'react'

function withStorageListener (WrappedComponent) {
    return function WrappedCOmponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false)

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log("cambios en TODOS_V1")
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            props.sync()
            setStorageChange(false)
        }

        return <WrappedComponent 
            show={storageChange} 
            toggleShow={toggleShow}
        />
    }
}


export { withStorageListener }