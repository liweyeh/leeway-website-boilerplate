/// <reference types="cypress" />

describe('home page test', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('home page text display', () => {
		cy.get('[data-cy="header"]').should('have.text', 'Welcome to Adasa boilerplate');
		cy.get('[data-cy="subtext"]').should(
			'have.text',
			'Go ahead and explore the features of this boilerplate',
		);
	});
});
