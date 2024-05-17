import React, { useState } from 'react';
import AppContext from "./AppContext";


export default function Provider ({children}) {

	const [contadorEpico, setContadorEpico] = useState(0)


	const value = {
		contadorEpico,
		setContadorEpico
	}

	return (

		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	)

}
