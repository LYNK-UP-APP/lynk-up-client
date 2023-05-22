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

   it('Should autofill an address', () => {
    cy.get('div > .long-input')
    .type('1600 Pennsylvania');
    cy.get('.pac-item', { timeout: 15000 }).should('be.visible');
    cy.get('div > .long-input')
    .type("{downarrow}")
    .type("{enter}");

    cy.get('div > .long-input')
    .should('have.value', '1600 Pennsylvania Ave SE Apartments, Pennsylvania Avenue Southeast, Washington, DC, USA');
  })

  it('Should autofill address using the name of a place', () => {
    cy.get('div > .long-input')
    .type('The white hous');
    cy.get('.pac-item', { timeout: 15000 }).should('be.visible');
    cy.get('div > .long-input')
    .type("{downarrow}")
    .type("{enter}");

    cy.get('div > .long-input')
    .should('have.value', 'The White House, Pennsylvania Avenue Northwest, Washington, DC, USA');
  })

});
