///<reference types = "Cypress"/>


it('Lesson17', () =>{
  cy.visit('https://next.privat24.ua/mobile?lang=en')
  cy.contains('Sign in')
})

it('Lesson17', () =>{
  cy.visit('https://next.privat24.ua/mobile?lang=en')
  cy.contains('div','Sign in')
})

it('Lesson17', () =>{
  cy.visit('https://next.privat24.ua/mobile?lang=en')
  cy.contains('SIGN IN',{matchCase:false})
})

it.only('Lesson17', () =>{
  cy.visit('https://next.privat24.ua/mobile?lang=en')
  cy.get('footer').contains('API')
})
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })