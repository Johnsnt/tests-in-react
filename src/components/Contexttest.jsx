import React, { useContext } from 'react'
import AppContext from './context/AppContext';

function Contexttest() {


	const {contadorEpico, setContadorEpico} = useContext(AppContext)


	const increment = () => {
		setContadorEpico((prev) => prev + 1)
	}

	const decrement = () => {
		setContadorEpico((prev) => prev - 1)
	}

		return (
			<>
			<h1>Exemplo contador com contexto</h1>
			<h1 data-testid="counter">{contadorEpico}</h1>
			<button data-testid="button-up" onClick={increment}>
					Up
			</button>
			<button data-testid="button-down" onClick={decrement}>
					Down
			</button>
	</>
		)
}

export default Contexttest