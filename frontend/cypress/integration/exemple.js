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

  it('Testa ordenação de produtos por avaliações ', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', { name: /Avaliações/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Terra Média: Sombras de Mordor');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '79.99');

    cy.findByRole('button', { name: /Avaliações/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Shards of Darkness');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '71.94');
  });

  it('Testa ordenação de produtos por ordem alfabetica ', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', { name: /Alfabética/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'Call Of Duty Infinite Warfare');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '49.99');

    cy.findByRole('button', { name: /Alfabética/ }).click();
    cy.get('[data-cy=product-card-title]').first().should('have.text', 'The Witcher III Wild Hunt');
    cy.get('[data-cy=product-card-price]').first().should('include.text', '119.50');
  });
});
