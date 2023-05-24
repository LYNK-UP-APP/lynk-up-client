describe('Group Page', () => {
  beforeEach(() => {
    cy.login();
    cy.getGroups();
    cy.get('[data-cy="dropdown"]').select('Groups');
  });

  it('Should have the correct url', () => {
    cy.url().should('include', '/groups');
  });

  it('Should be able to enter group name', () => {
      cy.get('[placeholder="Group Name"]')
      .type('Cool Group');
  });

  it('Should be able to search and add friends', () => {
      cy.get('[placeholder="Search friends..."]')
      .type('Friend 1');

      cy.get('.form > .short-tile').click();
  });

  it('Should be able to see a list of groups', () => {
      cy.get('.groupPage > :nth-child(1) > :nth-child(5)').should('contain', 'Super cool fun times');
  });

  it('Should be able to post a new group', () => {
      cy.get('[placeholder="Group Name"]').type("awesome fun group!");
      cy.get('.form > :nth-child(4)').click();

      cy.postGroup();
      cy.get('.submit').click();

      cy.get('.groupPage > :nth-child(1) > :nth-child(6)').contains('awesome fun group!').should('exist');
  });

});

