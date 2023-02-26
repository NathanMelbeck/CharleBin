describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('tdCypress', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8080/');
    cy.get('#message').click();
    cy.get('#message').type('ceci est un message');
    cy.get('#passwordinput').clear('m');
    cy.get('#passwordinput').type('motdepasse');
    cy.get('#sendbutton').click();
    cy.get('#pasteurl').click();
    cy.get('#passworddecrypt').clear('m');
    cy.get('#passworddecrypt').type('motdepasse');
    cy.get('#passwordform > .btn > .glyphicon').click();
    cy.get('#prettyprint').should('have.text', 'ceci est un message');
    /* ==== End Cypress Studio ==== */
  });
})