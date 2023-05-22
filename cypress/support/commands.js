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

Cypress.Commands.add('login', () => {
  cy.intercept('GET', 'https://lynk-up-server.onrender.com/users/303-386-2891', {
    statusCode: 200,
    fixture: 'getUser.json'
  })
  .visit('http://localhost:3000/');
});

Cypress.Commands.add('getEventOne', () => {
  cy.intercept('GET', 'https://bab2f687-e74e-434e-933e-7c7884a0521d.mock.pstmn.io/api/v1/events/1', {
    statusCode: 200,
    fixture: 'event1.json'
  });
});

Cypress.Commands.add('clickEventOne', () => {
  cy.get('[data-cy="event-link"]').first().click();
});


Cypress.Commands.add('getGroups', () => {
  cy.intercept('GET', 'https://bab2f687-e74e-434e-933e-7c7884a0521d.mock.pstmn.io/api/v1/groups', {
    statusCode: 200,
    fixture: 'groups.json'
  })
  .visit('http://localhost:3000/');
});