/// <reference types= "cypress" />

describe("Instanta Test Suite", () => {
    before(() => {
        Cypress.on('uncaught:exception', () => {
            return false

        })

    })
    it("Validate that the Instanta app launches successfully", () => { 
        //Write cypress tests.
        cy.visit("https://test.facility.instanta.app")
        //Assert For every minutes shows.

        cy.contains("For every minute").should("be.visible")
        cy.contains('Scan QR Code').should("be.visible")
        cy.get('#username').type("admin@sysdesk.com")
        cy.get('#password').type("admin123")
        cy.get('#submitBtn').click()
        cy.get('[href="/facility/Home.do"] > .card > .side-1 > span').click()
        cy.get('#submenu_service_charge__wrap > .menuItem__val > #menuValLabelId').click()
    
        
    })
})
