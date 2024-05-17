import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Dom from '../Dom';


describe('Testing DOM elements', () => {


	afterEach(cleanup)

	it("counter state should be equal to 0", () => {
		const { getByTestId } = render(<Dom/>)
		expect (getByTestId("counter")).toHaveTextContent(0)
	})

	it ("counter state should be equal to 1", () => {
		render(<Dom/>)

		const counter = screen.getByTestId("counter")
		const button = screen.getByText(/Up/i)

		fireEvent.click(button)

		expect(counter).toHaveTextContent(1)
	})


	it ("button is disabled", () => {
		const { getByTestId } = render(<Dom/>)
		expect (getByTestId("button-up")).not.toHaveAttribute("disabled")
		//Negação de um atributo que não existe no botão original
	})

	it ("button should be disabled", () => {
		const {getByTestId} = render(<Dom/>)
		expect(getByTestId("button-down")).toBeDisabled()
		//Botão está desabilitado ou não
	})

	it ("button has atrribute 'atributoFodaMP4'	", () => {
		const {getByTestId} = render(<Dom/>)
		expect(getByTestId("button-down")).toHaveAttribute("atributoFodaMP4")
	})
})

describe("Test Events", () => {

	afterEach(cleanup)

	it("increments counter", () => {
		const {getByTestId} = render(<Dom/>)

		fireEvent.click(getByTestId("button-up"))

		expect(getByTestId("counter")).toHaveTextContent("1")
	})

	it("decrements counter", () => {
		const {getByTestId} = render(<Dom/>)

		fireEvent.click(getByTestId("button-decrement-two"))
		//string ou number passa do mesmo jeito
		expect(getByTestId("counter")).toHaveTextContent(-1)
	})
})