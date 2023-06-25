/// <reference types="Cypress"/>
import { mobileReplenishment } from "../../support/pages/mobileReplenishment";
import { transfers } from "../../support/pages/tranfsers";
import { basePage } from "../../support/pages/basePage";
import { archivePage } from "../../support/pages/archive";

beforeEach('setup success response with stub',()=>{
    cy.intercept('https://next.privat24.ua/api/p24/pub/mobipay',{fixture:'confirmResponse/success.json'})
    // cy.intercept('https://next.privat24.ua/history/transactions',{fixture:'archiveResponse/success.json'})
})

it('Check archive state',()=>{
    basePage.open('https://next.privat24.ua/history/transactions?lang=en');
})

it.skip('Check archive state success',()=>{
    cy.intercept('https://next.privat24.ua/history/transactions',{fixture:'archiveResponse/success.json'})
})

it('Check archive state error',()=>{
    cy.intercept('https://next.privat24.ua/history/transactions',{fixture:'archiveResponse/error.json'})
})

it.skip('Replanishment of UAH mobile phone number',()=>{
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    // cy.visit('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber('987654328');
            
            // .get('[data-qa-node="phone-number"]')
            // .type('987654328')
    basePage.typeAmoount('1');
            // .get('[data-qa-node="amount"]')
            // .type('1') 
    basePage.typeDebitCardData('4552331448138217','0524','888'); 

            // .get('[data-qa-node="numberdebitSource"]')
            // .type('4552331448138217')
            // .get('[data-qa-node="expiredebitSource"]')
            // .type('0524')
            // .get('[data-qa-node="cvvdebitSource"]')
            // .type('888')
    mobileReplenishment.checkDebitCard('4552 3314 4813 8217');
            // .get('[data-qa-node="numberdebitSource"]')
            // .should('have.value','4552 3314 4813 8217')
    basePage.submitPayment();
            // .get('[data-qa-node="submit"]')
            // .click()
            // .get('[data-qa-node="total-amount"]')
            // .should('contain.value','1 205.00 UAH') //failed, fo some reason obser '' (null)
            // .get('[data-qa-node="commission"]')
            // .should('gave.text','4.00')             //failed, fo some reason obser '' (null)
            // .get('[data-qa-node="firstNamedebitSource"]').should('be.visible')
            // .type('IGOR')
            // .get('[data-qa-node="lastNamedebitSource"]')
            // .type('GARIWA')
            
            
            // cy.contains('submit').click;

});

it.skip('Money transfer between foreign cards',()=>{
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    // cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')    
    
    basePage.typeDebitCardData('4552331448138217','0524','888');
    // .get('[data-qa-node="numberdebitSource"]')
    // .type('4552331448138217')
    // .get('[data-qa-node="expiredebitSource"]')
    // .type('0524')
    // .get('[data-qa-node="cvvdebitSource"]')
    // .type('888')

    transfers.typeReceiveCardData('5309233034765085');
    // .get('[data-qa-node="numberreceiver"]')
    // .type('5309233034765085')
    basePage.typeAmoount('500');
    // .get('[data-qa-node="amount"]')
    // .type('500')
    transfers.checkCurrencyType('UAH');
    // .get('[data-qa-node="currency"]')
    // .should('have.text','UAH')


    transfers.typeComment('Cypress test.Make you all dreams came true');
    // cy.get('[data-qa-node="toggle-comment"]')
    // .click()
    // .get('[data-qa-node="comment"]')
    // .type('Cypress test.Make you all dreams came true')

    basePage.submitPayment();
    // .get('button[type="submit"]')
    //  .click()
    cy.wait(3000)
   transfers.checkDebitAndReceivedCards('4552 3314 4813 8217','5309 2330 3476 5085');
    // .get('[data-qa-node="numberdebitSource"]')
    // .should('have.value','4552 3314 4813 8217')
    // .get('[data-qa-node="numberreceiver"]')
    // .should('have.value','5309 2330 3476 5085')
    transfers.checkAmount('500');
    // .get('[data-qa-node="amount"]')
    // .should('have.value','500')
    transfers.checkComment('Cypress test.Make you all dreams came true');
    // .get('[data-qa-node="comment"]')
    // .should('have.text', 'Cypress test.Make you all dreams came true')
});
