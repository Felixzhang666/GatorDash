describe('Order History Page Test', function() {
    it('test the title', function () {
        cy.visit('./Front-end/History.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.title().should('eq', 'History')
    })

    it('test the navigation bar', function () {
        cy.get('nav')
            .find('img')
            .should('have.attr', 'src')

        cy.get('nav')  // get the containing toolbar
            .find('img[src*="gator_logo.png"]')     // *= gives a partial match on src
            .click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.url().should('include', 'newHome')
        cy.title().should('eq', 'GatorDash')
        cy.go('back')

        cy.get('nav')
            .find('a[id="home"]')
            .click()
        cy.url().should('include', 'newHome')
        cy.title().should('eq', 'GatorDash')
        cy.go('back')

        cy.get('nav')
            .find('a[id="History"]')
            .click()
        cy.url().should('include', 'History')


        cy.get('input[type = "Search"]')
            .invoke('attr', 'placeholder')
            .should('contain', 'Search')
        cy.get('input[type = "Search"]').type("Asian")

        cy.get('button[type = "submit"]')
            .should('have.text', 'Search')

    })

    it('should visit home page', function () {
        cy.get('nav')  // get the containing toolbar
            .find('img[src*="gator_logo.png"]')     // *= gives a partial match on src
            .click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.url().should('include', 'newHome')
        cy.title().should('eq', 'GatorDash')
        cy.go('back')
    })




    it('test order history table', function () {
        cy.get("tr")
    })

})
