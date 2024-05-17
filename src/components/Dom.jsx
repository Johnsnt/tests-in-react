import React, { useState } from "react"

const Dom = () => {
  const [counter, setCounter] = useState(0)

  return (
    <>
    <h1>Exemplo test elementos DOM</h1>
						{/* Data teste ID nos elementos */}
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        {" "}
        Up
      </button>
      <button
        disabled
        atributoFodaMP4=""
        data-testid="button-down"
        onClick={() => setCounter((prevCounter) => prevCounter - 1)}
      >
        Down
      </button>

      <button
      data-testid="button-decrement-two"
        onClick={() => setCounter((prevCounter) => prevCounter - 1)}
      >
        Down
      </button>
    </>
  )
}

export default Dom