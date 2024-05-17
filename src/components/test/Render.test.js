import React from 'react';
import { render } from '@testing-library/react';
import Render from './../Render';



describe("Snapshot test", () => {

 
 it('should take a snapshot', () => {
  //desestrutura um objeto retornado de render que retorna um fragmento da redenrização
  const { asFragment } = render(<Render />);
  expect(asFragment(<Render />)).toMatchSnapshot();
 });


 it('take a snapshot test (render using other sintax)', () => {
  const renderElement = render(<Render/>)
  expect(renderElement.asFragment()).toMatchSnapshot();

 });

});