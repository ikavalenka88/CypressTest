///<reference types = "Cypress"/>

//type

it('type', ()=>{
    cy.visit("https://next.privat24.ua/mobile?lang=en").get('[data-qa-node="phone-number"]').type(11223344)
})

it('focus', ()=>{
    cy.visit("https://next.privat24.ua/mobile?lang=en").get('[data-qa-node="amount"]').focus()
})

it('blur', ()=>{
    cy.visit("https://next.privat24.ua/mobile?lang=en").get('[data-qa-node="amount"]').focus().blur()
})

it('clear', ()=>{
    cy.visit("https://next.privat24.ua/mobile?lang=en").get('[data-qa-node="amount"]').type(999).wait(2000).clear()
})

it('submit', ()=>{
    cy.visit("https://next.privat24.ua/mobile?lang=en").get('form[method="post"]').submit()
})

it('click', ()=>{
    cy.visit("https://next.privat24.ua/mobile?lang=en").get('[data-qa-value="manual"]').click()
})

it('rightclick', ()=>{
    cy.visit("https://www.cypress.io/blog/").contains('Ambassador Spotlight').rightclick()
})

it('dclick', ()=>{
    cy.visit("https://live-samples.mdn.mozilla.net/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html").contains('My Card').dblclick()
})

it('check', ()=>{
    cy.visit("https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox-mixed/").get('#cond1').check()
})

it('uncheck', ()=>{
    cy.visit("https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox-mixed/").get('#cond2').uncheck()
})

it('select', ()=>{
    cy.visit("https://www.wikipedia.org/").get('#searchLanguage').select('de')
})

it('scrollIntoView', ()=>{
    cy.visit("https://next.privat24.ua/mobile?lang=en").get('[data-qa-node="lang"]').wait(2000).scrollIntoView()
})

it('sctollTo', ()=>{
    cy.visit("https://next.privat24.ua/mobile?lang=en").wait(2000).scrollTo(0,500)
})

it.only('sctollToWithTrigger', ()=>{
    cy.visit("https://next.privat24.ua/?lang=en").contains('Services').wait(2000).trigger('mouseover')
})