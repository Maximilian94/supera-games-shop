/// <reference types="cypress" />

describe('Testa adição de produto no carrinho', () => {
  it('Não adiciona produto no carrinho se a quantidade for 0', () => {
    cy.visit('http://localhost:3000/');
    cy.findByText(/FIFA/).click();
    cy.findByText(/Comprar/).click();
    cy.findByText(/FIFA/).should('not.exist');
  });

  it('Adiciona um produto no carrinho', () => {
    cy.visit('http://localhost:3000/');
    cy.findByText(/FIFA/).click();
    cy.findByText('+').click();
    cy.findByText(/Comprar/).click();
    cy.findByText(/FIFA/).should('exist');
    cy.get('[data-cy=checkout-product-quantity]').should('have.text', '1');
  });

  it('Testa se adiciona produto quando clicado em +', () => {
    cy.findByText('+').click();
    cy.get('[data-cy=checkout-product-quantity]').should('have.text', '2');
  });

  it('Frete grats para compras acima de R$ 250', () => {
    cy.get('[data-cy=checkout-shipping-price]').should('contain.text', '0.00');
  });
});
