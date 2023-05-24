describe('Event Tile', () => {
    beforeEach(() => {
      cy.login();
      cy.getEventOne();
      cy.clickEventOne();
      cy.intercept('GET', 'https://lynk-up-server.onrender.com/events/1', {
        fixture: 'event1.json'
      })
      cy.visit('http://localhost:3000/dashboard')
    });
  
    it('Should have a tile that has name date and time', () => {
      cy.get('.long-tile').first().should('contain', 'Magic Tournament').should('contain', '05/20/2023').should('contain', '5:00 PM MST');
    });

    it('Should be able to click an event title and be redirected to that event\'s page', () => {
      cy.getEventOne();
      cy.get("[data-cy='event-link']").first().click();
      cy.url().should('include', '/events/1');
      cy.get("[data-cy='event-title']").should('contain', 'Party at the Park');
      cy.get("[data-cy='event-desc']").should('contain', 'PARTY PARTY');
    });
  
  });