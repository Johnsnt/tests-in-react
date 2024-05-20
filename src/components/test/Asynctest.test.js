import React from 'react';
import { render, cleanup, fireEvent, waitFor} from '@testing-library/react';
import Asynctest from '../Asynctest';




describe("Testing asynchronous actions", () => {
	//reseta a cada teste
	afterEach(cleanup);

	it("increments counter after 0.5s", async () => {
		const { getByTestId, getByText } = render(<Asynctest />);

		fireEvent.click(getByTestId("button-up"))

		const counter = await waitFor(() => getByText("1"))

		expect(counter).toHaveTextContent("1")

	});


	it("Decrements counter after 1s", async () => {
		const {getByTestId, getByText} = render(<Asynctest/>)

		fireEvent.click(getByTestId("button-down"))
		//setando o tempo necessário para a função funcionar
		const counter = await waitFor(() => getByText("-1"), {timeout: 1500})

		expect(counter).toHaveTextContent("-1")
	})
});