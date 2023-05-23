describe('Event Info', () => {
    beforeEach(() => {
      cy.login();
      cy.getEventOne();
      cy.clickEventOne();
      cy.intercept('GET', 'https://lynk-up-server.onrender.com/users/888-888-8888', {
        fixture: 'getUser.json'
      })
      cy.intercept('GET', 'https://lynk-up-server.onrender.com/events/1', {
        fixture: 'event1.json'
      })
      cy.visit('http://localhost:3000/new-event')
    });
  
    it('Should have the correct url', () => {
      cy.url().should('include', '/new-event');
    });
  
    it('Should have a visible header', () => {
      cy.get('header').should('be.visible');
    });
  
    it('Should have a title for the event', () => {
      cy.get(".title").should('be.visible').should('contain', 'Create New Event');
    });
  
    it('Should have a placeholder that says event name', () => {
        cy.get("[placeholder='Event Name']").should('be.visible').should('have.attr', 'placeholder', 'Event Name');
      });

    it('Should be able to type in the Event Name', () => {
        cy.get("[placeholder='Event Name']").type('PARTY!!')
      });

    it('Should have a description for the event', () => {
      cy.get(".large-input").should('be.visible').should('have.attr', 'placeholder', 'Event Description')
    });

    it('Should be able to type in the description', () => {
        cy.get(".large-input").type('PARTY, PARTY')
      });
  
    it('Should have a date for the event', () => {
      cy.get('[type = "time"]').should('be.visible')
    });
    it('Should have a placeholder of group', () => {
      cy.get("[placeholder='Group']").should('be.visible').should('have.attr', 'placeholder', 'Group')
    });
  });