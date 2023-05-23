describe('Header', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Should have a header', () => {
    cy.get('header').should('be.visible');
  });

  it('Should have a logo', () => {
    cy.get("[data-cy='logo']").should('be.visible');
  });

  it('Should have a dropdown menu', () => {
    cy.get("[data-cy='dropdown']").should('be.visible');
  });

  it('Should have a link to friends and selecting it should navigate you to the friends page', () => {
    cy.get("[data-cy='dropdown']").select('Friends');
    cy.url().should('include', '/friends');
  });

  it('Should have a link to groups and selecting it should navigate you to the groups page', () => {
    cy.getGroups()
    cy.get("[data-cy='dropdown']").select('Groups');
    cy.url().should('include', '/groups');
  });

  it('Should have a link to create a new event and selecting it should navigate you to the new event page', () => {
    cy.get("[data-cy='dropdown']").select('New Event');
    cy.url().should('include', '/new-event');
  });

  it('Should have a link to the dashboard and selecting it should navigate you to the dashboard page', () => {
    cy.get("[data-cy='dropdown']").select('New Event');
    cy.url().should('include', '/new-event');
    cy.get("[data-cy='dropdown']").select('Dashboard');
    cy.url().should('include', '/dashboard');
  });
});