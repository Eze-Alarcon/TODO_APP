import { useEffect, useReducer } from "react";

// itemName = nombre del item en el Local Storage (LS)
// initialValue = valor inicial del dato a guardar en el LS

function useLocalStorage(itemName, initialValue) {
	const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))

	const {
		loading,
		error,
		sincronizedItem,
		item,
	} = state


	// Action Creators

	const onError = (err) => dispatch({ 
		type: actionTypes.error, 
		payload: err
	})

	const onSucces = (item) => dispatch({ 
		type: actionTypes.success, 
		payload: item,
	})

	const onSave = (item) => dispatch({ 
		type: actionTypes.save, 
		payload: item, 
	})

	const onSincronize = () => dispatch({ 
		type: actionTypes.save, 
	})
	

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

				onSucces(parsedItem)
			} catch (err) {
				onError(err)
			}
		}, 2000)
	}, [sincronizedItem])


	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem)
			localStorage.setItem(itemName, stringifiedItem)
			onSave(newItem)
		} catch (err) {
			onError(err)
		}
	}


	const sincronize = () => onSincronize()


	return {
		item,
		saveItem,
		loading,
		error,
		sincronize,
	} // forma de consumir el Custom Hook
}


const initialState = ({ initialValue}) => ({
	sincronizedItem: true,
	error: false,
	loading: true,
	item: initialValue,
})


const actionTypes = {
	error: 'ERROR',
	success: 'SUCCESS',
	save: 'SAVE',
	sincronize: 'SINCRONIZE',
}


const reducerObject = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		error: true,
	},
	[actionTypes.success]: {
		...state,
		error: false,
		loading: false,
		sincronizedItem: true,
		item: payload,
	},
	[actionTypes.sincronize]: {
		...state,
		loading: true,
		sincronizedItem: false,
	},
	[actionTypes.save]: {
		...state,
		item: payload,
	},
})


const reducer = (state, action) => (
	reducerObject(state, action.payload)[action.type] || state
)

export { useLocalStorage }