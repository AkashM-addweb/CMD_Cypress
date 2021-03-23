cy.get('.query-list') // class name
  .contains('bananas') // text
  .should('have.class', 'third') // li class third


  //Checking for placeholders
  cy.get('.query-form').within(() => {
    cy.get('input:first').should('have.attr', 'placeholder', 'Email')
    cy.get('input:last').should('have.attr', 'placeholder', 'Password')
  })

  
.first()
//To get the first DOM element within elements, use the .first() command.

cy.get('.traversal-table td')
  .first().should('contain', '1')

  cy.get('.traversal-disabled .btn')
  .not('[disabled]').should('not.contain', 'Disabled')