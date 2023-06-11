

it('By ID', () =>{
    cy.visit("https://ok.ru/")
    cy.get("#field_email")
})

it('By Class', () =>{
    cy.visit("https://www.cypress.io/blog/")
    cy.get(".algolia-autocomplete")
})

it('By Tag', () =>{
    cy.visit("https://www.cypress.io/blog/")
    cy.get("nav")
})

it('By Tag value', () =>{
    cy.visit("https://ok.ru/")
    cy.get('[name="st.password"]')
})

it('By Tags values', () =>{
    cy.visit("https://ok.ru/")
    cy.get('[data-l="t,register"][class="button-pro __sec mb-3x"]')
})

it('By Different Types', () =>{
    cy.visit("https://www.cypress.io/blog/")
    cy.get('button[type="button"]')
})

it.only('By Contains Name', () =>{
    cy.visit("https://next.privat24.ua/")
    cy.get('*[class^="card"]')
})