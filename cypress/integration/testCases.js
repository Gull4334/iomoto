/// <reference types="cypress" />


describe("Render Home page", () => {    

    it('Search Pakistan', () => {
        cy.visit('/');
        cy.wait(3000);
        cy.get(':nth-child(2) > button').click();
        cy.get('.form-control').type('Pakistan');
        cy.contains('tr', 'Pakistan').should('exist');
    });

    it('Search Germany', () => {
        cy.visit('/');
        cy.wait(3000);
        cy.get(':nth-child(2) > button').click();
        cy.get('.form-control').type('Germany');
        cy.contains('tr', 'Germany').should('exist');
    });

})


