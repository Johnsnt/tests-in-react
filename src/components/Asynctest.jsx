import React, { useState } from 'react'

function Asynctest() {

	const [counter, setCounter] = useState(0)

	const delayCountInc = () =>
			setTimeout(() => {
					setCounter(counter + 1)
			}, 500)

			const delayCountDec = () =>
				setTimeout(() => {
						setCounter(counter - 1)
				}, 1000)

		return (
			<>
			<h1>Exemplo Assíncrono simulado</h1>
			<h1 data-testid="counter">{counter}</h1>
			<button data-testid="button-up" onClick={delayCountInc}>
					{" "}
					Up
			</button>
			<button data-testid="button-down" onClick={delayCountDec}>
					Down
			</button>
			</>
		)
}

export default Asynctest