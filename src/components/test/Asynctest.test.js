import React from 'react';
import { render, cleanup, fireEvent, waitFor} from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'
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
});