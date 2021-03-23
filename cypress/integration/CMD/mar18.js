/// <reference types="Cypress"/>

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://cmd.addwebprojects.com/hello-bars/')
    })
  
    it('check Dotted lines', function(){
      cy.viewport(1606,700)

    // //Read text value // Below function will fail
    // cy.get('.forbes-imgwrap').should('have.class','tag-line').should('contain','Cybersecurity Startup to Watch!')
    
    //Cross button 
    //The below task fails as the icon width and height is not as per figma
    cy.get('[target=_self]').should('have.css','width','24px').should('have.css','height','24px')
    // cy.get('[src=https://cmd.addwebprojects.com/wp-content/themes/cmd/assets/images/crossicon-hellobar.png]').should('have.css','width','24px').should('have.css','height','24px')
    // var myAssert = new Assertion('Arthur Dent')
    // var obj = flag(myAssert, 'object'); // obj === 'Arthur Dent';

        //Root

        cy.get('.hello-bar').within(()=>{
            cy.root().should('have.class','hello-bar')
        })
    })

    it('Test Case2', function(){


    })

    it('Test Case3', function(){


    })

    it('Test Case4', function(){


    })


    it('Test Case5', function(){


    })















  })