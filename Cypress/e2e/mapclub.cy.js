describe('Mapclub Dev Website', () => {

  Cypress.Cookies.defaults({
    preserve: 'authToken',
  })

  before(() => {
    cy.login({username:'', password:''})
  })

  it('Member Area', () => {
    cy.viewport(1200, 750)
    cy.visit('https://mapclub.com/myAccount/home')    
  })

  it('Order List', () => {
    cy.viewport(1200, 750)
    cy.get(':nth-child(3) > .sidebar__menu > :nth-child(1) > .sidebar__menu-link').click()
  })

})