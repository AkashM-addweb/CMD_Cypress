  /// <reference types="Cypress"/>
  context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://cmd.lndo.site/hello-bars/')
    })
    
    it('For Checking Height in Different Desktop resolutions', function(){
    // <991 is Tablet/Mobile -------------  //992 and above is Desktop 
    
    //For Mobile
      cy.viewport(550, 450)
      cy.get('.hello-bar').invoke('height').should('be.greaterThan', 144.5).and('be.lessThan',146)
      
    cy.viewport(700,300)
    cy.get('.hello-bar').invoke('height').should('be.greaterThan', 144.5).and('be.lessThan',146)
    
    cy.viewport(991,400)
    cy.get('.hello-bar').invoke('height').should('be.greaterThan', 63).and('be.lessThan',65)
    
    //For Desktop ----------------------------------------------------------------
    cy.viewport(992, 769)
    cy.get('.hello-bar').invoke('height').should('be.greaterThan', 63.5).and('be.lessThan',65)
    
    cy.viewport(1280, 769)
    cy.get('.hello-bar').invoke('height').should('be.greaterThan', 63.5).and('be.lessThan',65)
    
    cy.viewport(1533, 769)
    cy.get('.hello-bar').invoke('height').should('be.greaterThan', 63.5).and('be.lessThan',65)
    
    cy.viewport(1600, 769)
    cy.get('.hello-bar').invoke('height').should('be.greaterThan', 63.5).and('be.lessThan',65)
    
    cy.viewport(1920, 769)
    cy.get('.hello-bar').invoke('height').should('be.greaterThan', 63.5).and('be.lessThan',65)
    
    })

    it('Content wrap', function(){
     
      //Below is the code for the Dotted lines...WIP

      //   // cy.get('').Window.getComputedStyle() 
      //   cy.get('.hello-bar')
      // .then($els => {
      //   // get Window reference from element
      //   const win = $els[0].ownerDocument.defaultView
      //   // use getComputedStyle to read the pseudo selector
      //   const before = win.getComputedStyle($els[0], 'before')
      //   // read the value of the `content` CSS property
      //   const contentValue = before.getPropertyValue('::before')
      //   // the returned value will have double quotes around it, but this is correct
        
      // })
      
      //Content wrap //Failed case below
      // cy.get('.hello-bar-contentwrap').should('be.visible')
      // .should('have.css','height','32px')

      cy.viewport(1606,700)
      //Failed case
      cy.get('.hello-bar-contentwrap').should('be.visible')
      //Padding should have been 16px according to Figma but here it is 20px as per the site
      .should('have.css','padding-top','20px').should('have.css','padding-bottom','20px') 

      //The below case fails as the cross mark that is included in Figma is not covered in the site
      // .should('have.class', '.vc_icon_element-inner')
      
    //Banner image //Banner Message excluding padding and button
      cy.get('.wpb_text_column > :nth-child(1) > .wpb_wrapper').should('be.visible').should('have.css', 'padding','0px')
      .should('have.css','display','flex').should('have.css','height', '24px')
      
      //Banner Text 
      cy.get('.btn-menu').should('have.css','display','flex').should('have.css','flex-direction','row')
      .should('have.css','align-items', 'center')
      
      //Read text value //span.forbes-imgwrap //WIP
      // cy.get('span.forbes-imgwrap').should('have.class','tag-line').should('contain','Cybersecurity Startup to Watch!')
            
      })
      
    it('Check Hello Bar CSS', function(){ 

    //Visibility
    cy.get('.hello-bar').should('be.visible').toMatchImageSnapshot()
    cy.screenshot()

    //Color of the Bar
    cy.get('.hello-bar').should('have.css','background-color','rgb(0, 0, 0)')

    //Border bottom
    cy.get('.hello-bar').should('have.css','border-bottom','1px solid rgb(85, 171, 148)') 

    })


    it('Button Readmore', function(){

        // cy.get('.vc_btn3-inline').should('have.css','width','93.625px').should('have.class','.hello-innercustom-btn')
        // .should('have.css','border','1px solid').should('have.css','color','rgb(141, 235, 210').should('have.css','padding-right','8px')
       
        cy.viewport(1600, 980)
      //Large laptopn button ASCII
      cy.get('.vc_btn3-container')
      .invoke('width').should('be.greaterThan', 93).and('be.lessThan', 94)

      cy.get('.vc_btn3-container')
      .contains('Read more') // Text Read more
      .invoke('outerHeight').should('be.greaterThan', 23).and('be.lessThan', 25)

      cy.get('.hello-innercustom-btn')
      .should('have.css','padding-right','8px')
      
      cy.get('.hello-innercustom-btn')

      .should('have.css','color','rgb(141, 235, 210)')
      .should('have.css','border','1px solid rgb(141, 235, 210)')
      .should('have.css','border-radius','2px')

      //Read More-------------------------------------------------------------  
      .should('have.css','line-height','24px')//Line height
      .should('have.css','font-weight','500') //F_ weight
      .should('have.css','font-family','"Roboto Mono", monospace, Arial, Helvetica, sans-serif') //Font family  
      .should('have.css','font-size','14px')// font-Size: Roboto Mono;

    })


    // it('Cross button', function(){
    //    //Cross button // The below case will Fail as the size should be 24px as per figma but currently 48 as per site
    //    cy.get('.vc_icon_element-inner').should('have.css','width','24px').should('have.css','height','24px') 
    // })

    it('Check Spacer', function(){
    cy.get('.vc_empty_space')
    .should('have.css','height','8px')
    
    })
  
  })
