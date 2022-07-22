import { useEffect, useState } from "react";

// itemName = nombre del item en el Local Storage (LS)
// initialValue = valor inicial del dato a guardar en el LS
function useLocalStorage(itemName, initialValue) {
	// estados de carga: loading y error
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)


	const [item, setItem] = useState(initialValue)
	

	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName)
				let parsedItem;
				
				// verificamos si el usuario es nuevo o ya tiene todos guardados

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue))
					parsedItem = []
				} else {
					parsedItem = JSON.parse(localStorageItem)
				}

				setItem(parsedItem)
				setLoading(false)
			} catch (err) {
				setError(err)
			}
		}, 2000)
	}, [])


	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem)
			localStorage.setItem(itemName, stringifiedItem)
			setItem(newItem)
		} catch (err) {
			setError(err)
		}
	}

	return {
		item,
		saveItem,
		loading,
		error,
	} // forma de consumir el Custom Hook
}

export { useLocalStorage }