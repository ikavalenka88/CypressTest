///<reference types="Cypress"/>

it('Using GET and FIND and Eq',() =>{
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)

})

it.only('Using GET and FIND and Eq',() =>{
    cy.viewport(1800,700)
    cy.visit('https://www.cypress.io/blog/')
    cy.get('div').find('div').find('div').find('div').find('a').eq(0)
})
//Comment

// describe('Mobile phone replenishment', () =>{
// it('Check min sum', () =>{
//     //some test
// })
// })