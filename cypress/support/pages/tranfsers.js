export class Transfers{

    // typeDebitCardData(cardNumber,expDate,cvv){
    //     cy.get('[data-qa-node="numberdebitSource"]')
    //         .type(cardNumber)
    //         .get('[data-qa-node="expiredebitSource"]')
    //         .type(expDate)
    //         .get('[data-qa-node="cvvdebitSource"]')
    //         .type(cvv)
    // }

    typeReceiveCardData(cardNumber){
    cy.get('[data-qa-node="numberreceiver"]')
        .type(cardNumber)
    }

    // typeAmoount(amount){
    //     cy.get('[data-qa-node="amount"]')
    //     .type(amount)
    // }

    checkCurrencyType(CurrenncyType){
        cy.get('[data-qa-node="currency"]')
        .should('have.text',CurrenncyType)
    }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type(comment)
    }

    // submitPayment(){
    //     cy.get('button[type="submit"]')
    //     .click()
    // }

    checkDebitAndReceivedCards(debitCard,receiverCard){
        cy.get('[data-qa-node="numberdebitSource"]')
        .should('have.value',debitCard)
        .get('[data-qa-node="numberreceiver"]')
        .should('have.value',receiverCard)
    }

    checkAmount(amount){
        cy.get('[data-qa-node="amount"]')
        .should('have.value',amount)
    }

    checkComment(comment){
        cy.get('[data-qa-node="comment"]')
        .should('have.text', comment)
    }
}

export const transfers = new Transfers()