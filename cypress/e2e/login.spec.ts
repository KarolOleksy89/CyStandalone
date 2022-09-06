describe('Test suite name', () => {

    beforeEach(() => {
        cy.visit('https://website-rhino.stg.rhino-multi.tup-cloud.com/');
    });

    it('Test title', () => {
        cy.get('[data-test="account-navigation-login-link"]').click();
        cy.get('[name="email"]').type('blablabla@bla.com');
        cy.get('[name="password"]').type('asdsadas');
        cy.get('[type="submit"]').click();
        cy.get('[class*="ErrorMessageContent"]')
            .should('be.visible')
            .should('have.text', 'Invalid username or password');
        cy.get('[name="email"]').clear().type('karol.oleksy@twoupdigital.com');
        cy.get('[name="password"]').clear().type('KutasKozla1#5');
        cy.get('[type="submit"]').click();
        cy.intercept('/api-proxy/customer/deposit-limits').as('depositLimits')

        /*** ZADANIE DODATKOWE NR 1
        cy.wait('@depositLimits', {timeout: 5000}).then(() => {
            cy.get('[class*="LinksContentWrapper"] a')
                .should('have.length', 5)
            cy.get('[class*="LinksContentWrapper"] a').eq(3)
                .should('have.text', 'casino')
        })
         */

        cy.get('[href="/?account=summary"]')
            .should('be.visible');
        cy.clearCookie('website.sid');
        cy.reload();
        cy.get('[data-test="account-navigation-login-link"]')
            .should('be.visible');
    });
});
