/// <reference types="cypress" />

describe('Testes de ordenação de produtos', () => {
  it('Testa ordenação de produtos por preço ', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', { name: /Preço/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Call Of Duty Infinite Warfare');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '49.99');

    cy.findByRole('button', { name: /Preço/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Call Of Duty WWII');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '249.99');
  });
});
