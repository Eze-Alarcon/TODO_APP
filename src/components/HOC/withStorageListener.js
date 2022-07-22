import React, { useState } from 'react'

function withStorageListener (WrappedComponent) {
    return function WrappedCOmponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false)

        return <WrappedComponent 
            show={storageChange} 
            toggleShow={setStorageChange}
        />
    }
}


export { withStorageListener }