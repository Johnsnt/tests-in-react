import React from 'react';
// import axios from 'axios'
import { render, getByTestId, fireEvent, waitFor } from '@testing-library/react';
import axiosMock from "axios"
import Axiostest from '../Axiostest';

jest.mock("axios")

describe('Axio testes', () => {
	it('render', () => {
		render(<Axiostest/>)
	})

	it("should display loading text", () => {
		const {getByTestId} = render(<Axiostest/>)

		expect(getByTestId("loading")).toHaveTextContent("Loading...")
	})

	it("should load and display the data", async () => {
		const url = 'https://jsonplaceholder.typicode.com/todos/1'
		const {getByTestId} = render(<Axiostest url={url}/>)

		axiosMock.get.mockResolvedValueOnce({
			data: {title: "delectus aut autem"}
		})

		fireEvent.click(getByTestId("fetch-data"))

		const titleData = await waitFor(() => getByTestId("show-data"))

		expect(axiosMock.get).toHaveBeenCalledTimes(1)
		expect(axiosMock.get).toHaveBeenCalledWith(url)
		expect(titleData).toHaveTextContent("delectus aut autem")
	})

})