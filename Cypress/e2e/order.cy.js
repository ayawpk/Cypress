describe('Mapclub Dev Website', () => {

  Cypress.Cookies.defaults({
    preserve: 'authToken',
  })

  before(() => {
    cy.login({username:'', password:''})
  })

  it('Access PDP & Checkout', () => {
    cy.wait(3000);
    cy.viewport(1200, 750)
    cy.get('input').click()
      .type('AUTO EYEBROW PENCIL 5 0.3G')
    cy.wait(3000)
    cy.get('.search-suggestion > :nth-child(1) > :nth-child(1)').click()
    cy.wait(3000)  
    cy.get('.btn-black').click()
    cy.wait(1000)  
    cy.get('.delivery__select > :nth-child(1)').click()
    cy.get('.btn').click()
    cy.wait(3000)
    cy.get('.shipping-method__btn').click()
    cy.contains('Standard').click()
    cy.wait(3000)
    cy.get('.btn').click()
    cy.wait(1000)
    cy.contains('/VA').click()
    cy.get(':nth-child(1) > .bank-item > .events-changeSrc').click()
    cy.get('.btn').click()
    cy.wait(1000)

    //get order number
    cy.get('.pay-detail > :nth-child(2) > span').then(($temp) =>{
      const orderNumber = $temp.text().trim()
      cy.visit('https://www.mapclub.com/member/order/detail/'+orderNumber)
    })
    // cancel the order
    cy.get('.order-info__button--cancel').click()
    cy.get('.popup-cancel__cancel').click()
  
  })
})