// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//const cypress = require("cypress");
Cypress.Commands.add('login', (username, password) => {
    cy.viewport(1200, 750)
    //cy.visit('https://mapclub.com/member/login')
    cy.visit('https://d-friday.blubox.id/member/login')

    cy.get('#username').clear()
    cy.get('#username').type('082134961865')
    cy.get('.button').click()
    cy.wait(5000);

    //const pwd = Cypress.env('P@ssw0rd123')
    cy.get('.input-group--has-icon > input').type('P@ssw0rd123')
    cy.wait(1000)
    cy.get('.button').click()
    cy.wait(5000)
})
