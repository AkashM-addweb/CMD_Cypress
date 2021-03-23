  /// <reference types="Cypress"/>

  context('Actions', () => {
    beforeEach(() => {
     
    })

      })

    it('General height and width', function(){
      cy.visit('https://cmd.addwebprojects.com/hello-bars/')
      cy.viewport(450, 250)

       try {     
        cy.get('.hello-bar-contentwrap')
        .should('have.css','padding-top','28px')
        .should('have.css','padding-right','37px')
        .should('have.css','padding-left','37px')
        .should('have.css','padding-bottom',' 20px')
        
      
       }
       
        catch (error) {
         console.error(error)
        }
      })

    it('Close button', function(){

      try{
        cy.get('.vc_icon_element-inner')
        .should('have.css','width','48px')
        .should('have.css','height','48px')
  
        //To check if the selected div is clickable
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
          
        cy.get('.wpb_text_column > :nth-child(1) > .wpb_wrapper')
        .should('have.css','position', 'static')
        .should('have.css','height', '48px')
        .should('have.css','width', '280px')
        .should('have.css','font-family','Roboto Mono')
        .should('have.css','weight','500')
        .should('have.css','size','14px')
        .should('have.css','line-height','24px')
        .should('have.css','color','rgb(141,235,210)')

        } catch (err) {
          // document.getElementById("demo").innerHTML = err.message;
          console.error(error);
        }
      })

    