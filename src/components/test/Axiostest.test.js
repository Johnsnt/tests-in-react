import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axiosMock from "axios"
import Axiostest from '../Axiostest';

//mocka todas as chamadas para axios, substituindo o comportamento real do axios por uma simulação
jest.mock("axios")

describe('Axio testes', () => {
	it('render', () => {
		render(<Axiostest/>)
	})

	it("should display loading text", () => {
		//Renderiza componente e desestrutura função getByTestId
		const {getByTestId} = render(<Axiostest/>)

		expect(getByTestId("loading")).toHaveTextContent("Loading...")
	})

	it("should load and display the data", async () => {
		const url = 'https://jsonplaceholder.typicode.com/todos/1'
		const {getByTestId} = render(<Axiostest url={url}/>)
		//Configura o mock para retornar uma resposta simulada com dados específicos quando chamado.
		axiosMock.get.mockResolvedValueOnce({
			data: {title: "delectus aut autem"}
		})

		fireEvent.click(getByTestId("fetch-data"))
		//espera que o show-data esteja no DOM indicando redenrização. 
		const titleData = await waitFor(() => getByTestId("show-data"))

		//verifica se o get do axios mockado foi chamado uma vez
		expect(axiosMock.get).toHaveBeenCalledTimes(1)
		//Verifica se o get foi chamado com a URL correta
		expect(axiosMock.get).toHaveBeenCalledWith(url)

		//Verifica se o elemento exibe os dados com base na chamada original que busca o objeto titulo dos dados retornados.
		expect(titleData).toHaveTextContent("delectus aut autem")
	})

})