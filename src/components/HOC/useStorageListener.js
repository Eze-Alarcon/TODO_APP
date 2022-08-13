import { useState } from 'react'

function useStorageListener (sync) {
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log("cambios en TODOS_V1")
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        sync()
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow
    }

}


export { useStorageListener }
