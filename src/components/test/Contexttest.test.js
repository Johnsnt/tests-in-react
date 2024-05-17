import React from 'react';
import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import Contexttest from '../Contexttest';
import AppContext from '../context/AppContext';




const setContadorEpico = jest.fn();

const renderComponent = (contadorEpico) => {
	return render(
		<AppContext.Provider value={{ contadorEpico, setContadorEpico }}>
			<Contexttest />
		</AppContext.Provider>
	);
};


describe("context tests", () => {

	afterEach(() => {
		cleanup();
		setContadorEpico.mockClear()
		//limpa as funções de mock
	})

	it("checa se o estado é alterado para 1", () => {
		
		const contadorEpico = 0
		renderComponent(contadorEpico);

		//selecionando os elementos que serão afetados
		const button = screen.getByTestId('button-up')
		const contador = screen.getByTestId('counter')

		//Verifica se o valor padrão é zero
		expect(contador).toHaveTextContent('0')

		fireEvent.click(button)
		
		//Verifica se a função é chamada
		expect(setContadorEpico).toHaveBeenCalled()
		//teste se o valor testado é do tipo função
		expect(setContadorEpico).toHaveBeenCalledWith(expect.any(Function))

		/*Cria uma função de simulação para a função de incremento 
		que está atrelada à função de alteração de estado*/

		const funçaoIncrementar = setContadorEpico.mock.calls[0][0]
		const valornovo = funçaoIncrementar(contadorEpico)
		expect(valornovo).toBe(1)

		//Limpeza do dom para não gerar multiplas renderizações
		cleanup();

		//renderização do componente com um valor novo 
		renderComponent(valornovo)

		expect(screen.getByTestId('counter')).toHaveTextContent('1')

	})

	it("Checa se o valor foi decrementado", () => {
		const contadorEpico = 0
		renderComponent(contadorEpico);

		const button = screen.getByTestId('button-down')
		const contador = screen.getByTestId('counter')

		fireEvent.click(button)
		
		const decrement = setContadorEpico.mock.calls[0][0]
		const valornovo = decrement(contadorEpico)
		expect(valornovo).toBe(-1)

	})
})
