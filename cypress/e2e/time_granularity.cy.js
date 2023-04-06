/// <reference types='cypress' />

describe('Time granularity', () => {
  beforeEach(() => {
    cy.visit('')
    
  });
  it('Should filter data by Time granularity Daily', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')

    cy.get('[id=Password]')
      .type('Roivenue1!')

    cy.get('[id=tracking-button-submit]')
      .click()

    cy.contains('button', 'Weekly')
      .click()

    cy.contains('Daily')
      .click()

    cy.get('[id=chart-container]', {timeout: 2000})
      .toMatchImageSnapshot();
      
    
  });

  it('Should filter data by Time granularity Monthly', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')

    cy.get('[id=Password]')
      .type('Roivenue1!')

    cy.get('[id=tracking-button-submit]')
      .click()
    cy.contains('button', 'Weekly')
      .should('have.text', ' Weekly expand_more')

    cy.contains('button', ' Weekly expand_more', {timeout: 60000})
      .click()
    
    cy.contains('Monthly')
      .click()

    cy.get('[id=chart-container]', {timeout: 2000})
      .toMatchImageSnapshot();

  });

  it('Should filter data by Time granularity Weekly', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')
  
    cy.get('[id=Password]')
      .type('Roivenue1!')
  
    cy.get('[id=tracking-button-submit]')
      .click()
     
    cy.contains('button', 'Weekly')
      .should('have.text', ' Weekly expand_more')
  
    cy.contains('button', ' Weekly expand_more')
      .click()
    
    cy.get('.ng-tns-c119-20 > :nth-child(2)')
      .click()

    cy.get('[id=chart-container]', {timeout: 2000})
      .toMatchImageSnapshot();

    
  })
}) 