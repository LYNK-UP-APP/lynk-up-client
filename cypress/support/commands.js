Cypress.Commands.add('login', () => {
  cy.intercept('GET', 'https://lynk-up-server.onrender.com/users/1', {
    statusCode: 200,
    fixture: 'getUser.json'
  })
  .visit('http://localhost:3000/');
});


Cypress.Commands.add('getEventOne', () => {
  cy.intercept('GET', 'https://lynk-up-server.onrender.com/events/1', {
    statusCode: 200,
    fixture: 'event1.json'
  });
});

Cypress.Commands.add('clickEventOne', () => {
  cy.get('[data-cy="event-link"]').first().click();
});


Cypress.Commands.add('getGroups', () => {
  cy.intercept('GET', 'https://lynk-up-server.onrender.com/groups/', {
    statusCode: 200,
    fixture: 'groups.json'
  })
  .visit('http://localhost:3000/');
});


Cypress.Commands.add('addFriends', () => {
  cy.intercept('POST', 'https://lynk-up-server.onrender.com/1/friends', {
    statusCode: 200,
    body: {
      "user_id": "2",
      "user_name": "Jane",
    }
  })
});
Cypress.Commands.add('postGroup', () => {
    cy.intercept('POST', 'https://lynk-up-server.onrender.com/groups/create', (req) => {
      req.reply({
        status: 200,
        body: {
          "name": "awesome fun group!",
          "user": "1",
          "friends": "[1]"
      }
      })
    })
});

Cypress.Commands.add('getFriends', () => {
  cy.intercept('GET', 'https://lynk-up-server.onrender.com/users/*/friends', {
    statusCode: 200,
    fixture: 'friends.json'
  });
});
