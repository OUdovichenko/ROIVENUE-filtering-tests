describe('Date Picker Selector', () => {
  beforeEach(() => {
    cy.visit('')
  });

  it('Should filter data by date 1-12 months', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')

    cy.get('[id=Password]')
      .type('Roivenue1!')

    cy.get('[id=tracking-button-submit]')
      .click()

    cy.contains('button', 'W53 2020')
      .click()

    cy.get('[id=tracking-date-range-picker-from-input]')
      .type('{selectall}{backspace}')
      .type('01/01/2020')

    cy.get('[id=tracking-date-range-picker-to-input]')
      .type('{selectall}{backspace}')
      .type('31/12/2020')

    cy.contains('button', 'OK')
      .click()

    cy.get('[id=chart-container]', {timeout: 2000})
      .toMatchImageSnapshot();

      
  })

  it('Should filter data by date 5-10 months', () => {
    cy.get('[id=Username')
      .type('oleksandr.dovichenko@gmail.com')

    cy.get('[id=Password]')
      .type('Roivenue1!')

    cy.get('[id=tracking-button-submit]')
      .click()

    cy.contains('button', 'W53 2020')
      .click()

    cy.get('[id=tracking-date-range-picker-from-input]')
      .type('{selectall}{backspace}')
      .type('01/05/2020')

    cy.get('[id=tracking-date-range-picker-to-input]')
      .type('{selectall}{backspace}')
      .type('31/10/2020')

    cy.contains('button', 'OK')
      .click()

    cy.get('[id=chart-container]', {timeout: 2000})
      .toMatchImageSnapshot();
    
  })
})