///<reference types = "Cypress"/>


it('SHOULD',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]').type('{selectall}{backspace}').type(100).should('have.value',100).and('be.visible')
})

it('EXPECT',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]').type('{selectall}{backspace}').type(100).then(input=>{
        expect(input).to.have.value(100)
    })
})

it('Check default for Deposit',()=>{
    cy.visit('https://next.privat24.ua/deposit?lang=en')
    cy.get('[data-qa-value="UAH"]').should('be.checked')
    
})

it('Check mouse over My Deposits',()=>{
    cy.visit('https://next.privat24.ua/deposit?lang=en')
    cy.contains('My deposits').trigger('mouseover').get('#archiveDeposits').should('be.visible')
})

it('Check attr for button Show cards',()=>{
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards').should('have.attr', 'type').and('match',/button/)
})

it.only('Check url',()=>{
    cy.visit('https://next.privat24.ua?lang=en')
    cy.url().should('eq','https://next.privat24.ua/?lang=en')
})