describe('Dashboard', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Should have a visible header', () => {
    cy.get('header').should('be.visible');
  });

  it ('Should have a title for Events', () => {
    cy.get("[data-cy='dashboard-header']").should('be.visible').should('contain', 'Events');
  });

  it('Should have a list of events', () => {
    cy.get('.long-tile').first().should('contain', 'Magic Tournament').should('contain', '05/20/2023').should('contain', '5:00 PM MST');
    
    cy.get('.long-tile').last().should('contain', 'Turing Graduation').should('contain', '06/15/2023').should('contain', '7:00 PM MST');
  });

  it('Should be able to search for an event', () => {
    cy.get("[data-cy='search-input']").type('Magic Tournament');
    cy.get('.long-tile').should('have.length', 1);
    cy.get('.long-tile').first().should('contain', 'Magic Tournament').should('contain', '05/20/2023').should('contain', '5:00 PM MST');
  });

  it('Should be able to search for a different event', () => {
    cy.get("[data-cy='search-input']").type('THE BIG BASH BDAY BONANZA');
    cy.get('.long-tile').should('have.length', 1);
    cy.get('.long-tile').first().should('contain', 'BIG BASH').should('contain', '05/20/2023').should('contain', '7:00 PM MST');
  });

  it('Should be able to click an event title and be redirected to that event\'s page', () => {
    cy.getEventOne();
    cy.get("[data-cy='event-link']").first().click();
    cy.url().should('include', '/events/1');
    cy.get("[data-cy='event-title']").should('contain', 'Party at the Park');
    cy.get("[data-cy='event-desc']").should('contain', 'PARTY PARTY');
  });

});