  /// <reference types="Cypress"/>

  describe('Test suite for Mobile Figma shots..', function(){
    
    it('General height and width', function(){

      cy.visit('https://cmd.addwebprojects.com/hello-bars/')
      cy.viewport(450, 250)

      try {     
        cy.get('.hello-bar-contentwrap')
        .should('have.css','padding-top','28px')
        .should('have.css','padding-right','37px')
        .should('have.css','padding-left','37px')
        .invoke('width').should('be.greaterThan', 360).and('be.lessThan',362)
      }
       
      catch (error) {
         console.error(error)
        }
      })

    it('Close button', function(){

      try{
        cy.visit('https://cmd.addwebprojects.com/hello-bars/')
        cy.viewport(450, 250)
      
        cy.get('.vc_icon_element-inner')
        .invoke('height').should('be.greaterThan', 47).and('be.lessThan',50)

        //To check if the selected div is clickable
        cy.get('.vc_icon_element-inner')
        .click('topLeft').click('topRight').click('top')
        .click('bottomLeft').click('bottomRight').click('bottom')
        .click('center').click('left').click('right')
        
        //Core Cross button
        cy.get('[target=_self]')
        .should('have.css','height','14px')
        .should('have.css','width','14px')
      }
      catch(error){
        console.error(error)
      }
  
      })
  
    it('Text on the Main opage //  Frame410', function(){
        try {
          
          cy.visit('https://cmd.addwebprojects.com/hello-bars/')
          cy.viewport(450, 250)

        // cy.get('.forbes-imgwrap').children().should('contain.text','Top 20')
        cy.get('.wpb_text_column > :nth-child(1) > .wpb_wrapper').should('contain.text','We’re a ').children().should('contain.text',' Cybersecurity Startup to Watch!')
        cy.get('.wpb_text_column > :nth-child(1) > .wpb_wrapper').
        should('have.css','position', 'static')
        .should('have.css','height', expect.to.be.within('25px', '30px'))
        .should('have.css','width', '280px')
        .should('have.css','font-family','Roboto Mono')
        .should('have.css','weight','500')
        .should('have.css','size','14px')
        .should('have.css','line-height','24px')
        .should('have.css','color','rgb(141,235,210)')
        }      

        catch (error) {
          // document.getElementById("demo").innerHTML = err.message;
          console.error(error);
        }
      })

    it('Read more button', function(){

        cy.visit('https://cmd.addwebprojects.com/hello-bars/')
        cy.viewport(450, 350)

        try{
        cy.get('[title="Read more"]')

        //padding
        .should('have.css','padding-top','4px')
        .should('have.css','padding-right','11px')
        .should('have.css','padding-bottom','4px')
        .should('have.css','padding-left','11px')     
        
        //height
        .should('have.css','height','34px')
        //position: static
        .should('have.css','position','static')    
        //border 1px
        .should('have.css','border','1px solid rgb(141, 235, 210)')
        //border radius
        .should('have.css','border-radius','2px')
        //box sizing
        .should('have.css','box-sizing','border-box')
        
        //Font
        .should('have.css','font-size','14px')
        .should('have.css','font-weight','500')
        .should('have.css','font-style','normal')
        .should('have.css','font-family','"Roboto Mono", monospace, Arial, Helvetica, sans-serif')
        
        //Color
        .should('have.css','color','rgb(141, 235, 210)')
        }
        catch(error){
          console.log(error)
        }

      })  


    it('Spacer', function(){
      cy.visit('https://cmd.addwebprojects.com/hello-bars')

      try{
      cy.get('.vc_empty_space')
      .invoke('height').should('be.greaterThan', 7.5).and('be.lessThan',8.5)

      }
      catch(error){
        console.error(error)
      }

    })
    })
