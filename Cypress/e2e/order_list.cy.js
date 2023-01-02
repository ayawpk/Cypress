describe('Order List', () => {  
  it('Open order list page', () =>{
    //set size and orientation of the screen
    cy.viewport(1200, 750)
    //call custom command login from commands.js
    cy.login({username:'', password:''})
    cy.contains('Hi,').click()
    cy.wait(3000)

    cy.url()
      .should('include','/myAccount/home')

    cy.get(':nth-child(3) > .sidebar__menu > :nth-child(1) > .sidebar__menu-link').click()
    cy.wait(3000)

    cy.get(':nth-child(1) > .order-item__container > .product-con > .product-left > .product-dital').click()
  
  }) 
})