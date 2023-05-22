describe('Error', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('http://localhost:3000/this-is-not-a-real-page');
  });

  it('Should redirect the user to the error page', () => {
    cy.url().should('include', '/404');
  });

  it('Should have a visible header', () => {
    cy.get('header').should('be.visible');
  });

  it('Should let the user know there has been an error', () => {
    cy.get("[data-cy='error-title']").should('be.visible').should('contain', 'Oh no! The page you\'re looking for either moved or doesn\'t exist.');
  });

  it('Should let the user know the error status', () => {
    cy.get("[data-cy='error-status']").should('be.visible').should('contain', 'Error status:');
  });

  it('Should have a link to the home page that redirects the user to the home page', () => {
    cy.get("[data-cy='home-link']").should('be.visible').should('contain', 'home').click();
    cy.url().should('contain', '/dashboard');
  });

});