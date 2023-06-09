describe('Event Info', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('GET', 'https://lynk-up-server.onrender.com/events/1', {
      fixture: 'event1.json'
    })
    cy.visit('http://localhost:3000/events/1')
  });

  it('Should have the correct url', () => {
    cy.url().should('include', '/events/1');
  });

  it('Should have a visible header', () => {
    cy.get('header').should('be.visible');
  });

  it('Should have a title for the event', () => {
    cy.get("[data-cy='event-title']").should('be.visible').should('contain', 'Party at the Park');
  });

  it('Should have a description for the event', () => {
    cy.get("[data-cy='event-desc']").should('be.visible').should('contain', 'PARTY PARTY');
  });

  it('Should have a date for the event', () => {
    cy.get("[data-cy='event-date-time']").should('be.visible').should('contain', '01/01/2024');
  });

  it('Should have a time for the event', () => {
    cy.get("[data-cy='event-date-time']").should('be.visible').should('contain', '7:00 PM MST');
  });

  it('Should have a location for the event', () => {
    cy.get("[data-cy='event-location']").should('be.visible').should('contain', '123 Main St, Unit 101 Fort Collins, CO, 80525');
  });

  it('Should have a group name for the event', () => {
    cy.get("[data-cy='event-group']").should('be.visible').should('contain', 'Brunch');
  });
 it('Should have a back button and take you back home', () => {
  cy.get('.back').should('be.visible').click()
  cy.url().should('eq', 'http://localhost:3000/dashboard')
 })
});
