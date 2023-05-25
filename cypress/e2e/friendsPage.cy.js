describe('friends', () => {
    beforeEach('visit friends page', () => {
        cy.login()
        cy.intercept('GET', `https://lynk-up-server.onrender.com/users/1/friends`, { fixture: 'friends.json' });
        cy.visit('http://localhost:3000/friends')

    })
    it('should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
      });
    
    it('should have a header', () => {
        cy.get('header')
    })

    it('should have a header that has a Lynk up logo and a dropdown menu', () => {
        cy.get('.header-logo')
        .get('.nav-drop')
    })
    
    it('should have a title that says friends', () => {
        cy.get('.title')
        .contains('Friends')
    })
    it('should have a card that contains title, search bar, add friend', () => {
        cy.get('.card')
        .children().should('have.length', 5)
        .get('.title')
        .get('.long-input')
        .get('div > input')
        .get('button')
    })
    it('should have a long input that contains Search amd should be able to type in it', () => {
        cy.get('.long-input').should('have.attr', 'placeholder', 'Search')
        .type('Joyquil').should('have.value', 'Joyquil')
    })

});