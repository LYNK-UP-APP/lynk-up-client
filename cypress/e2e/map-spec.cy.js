describe('Group Page', () => {
  beforeEach(() => {
    cy.login();
    cy.getGroups();
    cy.get('[data-cy="dropdown"]').select('New Event');
  });

  it('Should have the correct url', () => {
    cy.url().should('include', '/new-event');
  });

  it('Should give suggestions for autofill', () => {
    cy.get('div > .long-input')
    .type('1600 Pennsylvania')

    cy.get('.pac-item', { timeout: 10000 }).should('be.visible');
  })

});