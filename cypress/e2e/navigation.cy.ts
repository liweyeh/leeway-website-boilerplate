/// <reference types="cypress" />

const links = [
	{ href: '/', isExternal: false, displayName: 'Home' },
	{ href: '/theme', isExternal: false, displayName: 'Theme' },
	{ href: '/defaultError', isExternal: false, displayName: 'Default Error Page' },
	{ href: '/testing', isExternal: false, displayName: 'Testing Ground' },
];

const navPage = (displayName: string, href: string) => {
	cy.get('[data-cy="dropdown"]').within(() => {
		cy.get('button').click();
		cy.contains(displayName).click();
		cy.url().should('include', `${href}`);
	});
};

describe('page navigation test', () => {
	before(() => {
		cy.visit('/');
	});

	links.forEach(link => {
		it('nav to theme page and back', () => {
			navPage(link.displayName, link.href);
			navPage('Home', '/');
		});
	});
});
