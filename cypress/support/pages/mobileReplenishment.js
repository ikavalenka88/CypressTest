import { constant } from "lodash"

export class MobileReplenishment {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    // typeAmoount(amount){
    //     cy.get('[data-qa-node="amount"]')
    //     .type(amount)
    // }

    // typeDebitCardData(cardNumber,expDate,cvv){
    //     cy.get('[data-qa-node="numberdebitSource"]')
    //         .type(cardNumber)
    //         .get('[data-qa-node="expiredebitSource"]')
    //         .type(expDate)
    //         .get('[data-qa-node="cvvdebitSource"]')
    //         .type(cvv)
    // }

    // submitPayment(){
    //     cy.get('[data-qa-node="submit"]')
    //     .click()
    // }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="numberdebitSource"]')
        .should('have.value',debitCard)
    }

} 
export const mobileReplenishment = new MobileReplenishment()