describe('Event Info', () => {
    beforeEach(() => {
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

    it('Should be able to type in the time slot', () => {
        cy.get('[type = "time"]').should('be.visible').type('07:20')
        .should('have.value', '07:20')
      });
  
    it('Should have a date for the event', () => {
      cy.get('[type = "date"]').should('be.visible').type('2023-03-04')
      .should('have.value', '2023-03-04')
    });
  
    it('Should have a placeholder of group', () => {
      cy.get("[placeholder='Group']").should('be.visible').should('have.attr', 'placeholder', 'Group')
    });

    it.only('successfully creates an event', () => {
        cy.get('[placeholder="Event Name"]').type('Event Test');
        cy.get('.large-input').type('Event Description Test');
        cy.get('.short-input[type="date"]').type('2023-05-25');
        cy.get('.short-input[type="time"]').type('12:00');
        cy.get('[placeholder="Group"]').type('Group');
        cy.get('div > .long-input').type('123 fun st.')
        cy.intercept('POST', 'https://lynk-up-server.onrender.com/events').as('createEvent');
        cy.get('button').contains('Create Event').click();
        cy.wait('@createEvent').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
      });
  });