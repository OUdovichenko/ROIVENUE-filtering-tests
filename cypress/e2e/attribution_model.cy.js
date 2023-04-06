describe('Attribution models', () => {
  beforeEach(() => {
    cy.visit('')
    
  });
  it('Should filter data by Attribution model AI Data Driven', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')

    cy.get('[id=Password]')
      .type('Roivenue1!')

    cy.get('[id=tracking-button-submit]')
      .click()

    cy.contains('First Touch')
      .click()
   
    cy.contains('AI Data Driven')
      .click()

    cy.wait(2000)
    cy.get('[id=chart-container]')
      .toMatchImageSnapshot(); 
    
  });

  it('Should filter data by Attribution model Time Decay', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')

    cy.get('[id=Password]')
      .type('Roivenue1!')

    cy.get('[id=tracking-button-submit]')
      .click()

    
    cy.contains('AI Data Driven')
      .click()
    
    cy.contains('Time Decay')
      .click()

    cy.wait(2000)
      .get('[id=chart-container]')
      .toMatchImageSnapshot();

  });

  it('Should filter data by Attribution model Last Touch', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')

    cy.get('[id=Password]')
      .type('Roivenue1!')

    cy.get('[id=tracking-button-submit]')
      .click()
    
    cy.contains('Time Decay')
      .click()
    
    cy.contains('Last Touch')
      .click()

    cy.wait(2000)
      .get('[id=chart-container]')
      .toMatchImageSnapshot();
  
  });

  it('Should filter data by Attribution model First Touch', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')

    cy.get('[id=Password]')
      .type('Roivenue1!')

    cy.get('[id=tracking-button-submit]')
      .click()

    cy.contains('Last Touch')
      .click()
    
    cy.contains('First Touch')
      .click()

    cy.wait(2000)
      .get('[id=chart-container]')
      .toMatchImageSnapshot();
    
  }); 
    
})