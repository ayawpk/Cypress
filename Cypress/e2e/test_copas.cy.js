describe('empty spec', () => {
  
  Cypress.Cookies.defaults({
    preserve: 'authToken',
  })

  before(() => {
    cy.login({username:'', password:''})
  })

  it('Member Area', () => {
    cy.viewport(1200, 750)
    cy.visit('https://mapclub.com/myAccount/home');  
    cy.get(':nth-child(3) > .sidebar__menu > :nth-child(1) > .sidebar__menu-link').click()
    cy.wait(3000)

    //copy value of order number
    cy.get(':nth-child(1) > .order-item__container > .order-tit > .tit-con > .float-clearfix > .order-no > :nth-child(2)').then(($temp) =>{
      const orderNumber = $temp.text()
      cy.visit('https://www.mapclub.com/member/order/detail/'+ orderNumber)
    }) 
        
  })

})