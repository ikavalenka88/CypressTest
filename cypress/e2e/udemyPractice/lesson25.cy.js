///<reference types = "Cypress"/>


it.skip('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua/')
        .then((response) => {
            console.log(response);
        })
})

it.skip('Example sending the POST request', () => {

    const requestBody = {
        "phone":"+380987654328",
        "amount":1200,
        "currency":"UAH",
        "cardCvv":"888",
        "cardExp":"0524",
        "card":"4552331448138217",
        "operator":"Kyivstar Ukraine",
        "operatorId":"602",
        "nameA":"Kirill Marash",
        "withDuplicateCheck":true,
        "action":"add",
        "xref":"f2ca1617385d5f196cbd31133c645621",
        "_":1687294406076
    };

    const headersData = {
        Cookie:
            '_gcl_au=1.1.764668255.1686440336; _fbp=fb.1.1686440336871.58689889; lsl=1; pubkey=dbe0f924db22b6a76063cf63dc7d92e7; _gid=GA1.2.1038744805.1687294314; _ga=GA1.1.846214976.1686440337; fp=63; lfp=6/11/2023, 1:39:02 AM; pa=1687044300899.98440.37768561314073534next.privat24.ua0.5487738925880463+2; _ga_G0T18XQY2T=GS1.1.1687294312.13.1.1687294361.11.0.0',
    }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData,

    }).then((response) => {

        expect(response).to.have.property('status').to.equal(200)
        expect(response.body).to.have.property('status').to.equal('success')
        expect(response.headers).to.have.property('content-type').to.equal('application/json; charset=utf-8')
        console.log(response);
    })
})

    it('Example sending the POST request with SHOULD', () => {

        const requestBody = {
            "phone":"+380987654328",
            "amount":1200,
            "currency":"UAH",
            "cardCvv":"888",
            "cardExp":"0524",
            "card":"4552331448138217",
            "operator":"Kyivstar Ukraine",
            "operatorId":"602",
            "nameA":"Kirill Marash",
            "withDuplicateCheck":true,
            "action":"add",
            "xref":"59b52abed538e04954c1ce20b3847db2",
            "_":1687298527519
        };
    
        const headersData = {
            Cookie:
            '_gcl_au=1.1.764668255.1686440336; _fbp=fb.1.1686440336871.58689889; lsl=1; _gid=GA1.2.1038744805.1687294314; pubkey=e79208cce256156e53127b232815a047; _ga=GA1.1.846214976.1686440337; fp=65; lfp=6/11/2023, 1:39:02 AM; pa=1687044300899.98440.37768561314073534next.privat24.ua0.5487738925880463+4; _ga_G0T18XQY2T=GS1.1.1687298357.14.1.1687298450.49.0.0',
        }
    
        cy.request({
            method: 'POST',
            url: 'https://next.privat24.ua/api/p24/pub/mobipay',
            body: requestBody,
            headers: headersData,
        }).its('body').should('contain', {
    
            status: 'success'
        })
        // .its('headers').should('contain',{       //need clarify
        //     amount: '1200'
        // })
});