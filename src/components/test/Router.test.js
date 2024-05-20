import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TestRouter from '../Testrouter';



function renderComponent() {
	render(
		<TestRouter />
	);
}

describe('Router testes', () => {

	it('renderiza a página principal como padrão', () => {
		renderComponent()

		const elemento = screen.getByTestId('home-link')
		expect(elemento).toBeInTheDocument();		
		expect(screen.getByText(/Home page/i)).toBeInTheDocument();
	});

	it('Navega para a página about quando o link é clicado', () => {
		renderComponent()

		fireEvent.click(screen.getByTestId('about-link'));
		expect(screen.getByText(/about page/i)).toBeInTheDocument();
	})

	it('Navega para a página de contato quando clicado no link de contato', () => {
			renderComponent();
			fireEvent.click(screen.getByTestId('contact-link'))
			expect(screen.getByText(/MS-08B-3 GOUF/i))
	})

	it('todos os links de navegação', () => {
		renderComponent()
		expect(screen.getByTestId('home-link')).toBeInTheDocument();
  expect(screen.getByTestId('about-link')).toBeInTheDocument();
  expect(screen.getByTestId('contact-link')).toBeInTheDocument();
	})

	it('Verifica se a imagem é exibida quando é clicado na rota Room', () => {
		renderComponent()
		fireEvent.click(screen.getByTestId('room-link'))
		expect(screen.getByAltText('Shadow_Hoppou_Image')).toBeInTheDocument();
	})

});