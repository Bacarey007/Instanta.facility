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
        
        
    
        
    })
    it("Validate that the visitor's pass works successfully", () => { 
        //Write cypress tests.
        cy.visit("https://test.facility.instanta.app")
        //Assert For every minutes shows.

        cy.get('#username').type("abakare@sysservesolutions.com")
        //Assert username was entered
        cy.get('#password').type("Gunnersd12$")
        //Asset password was entered
        cy.get('#submitBtn').click()
        cy.get('[href="/facility/Home.do"] > .card > .side-1 > span').click()
        cy.get('#submenu_visitor__wrap > .menuItem__caretWrap > img').click()
        cy.get('#submenu_visitor_0').click()
        cy.get('.flexed > .btn > span').click()
        cy.get(':nth-child(1) > .card__section__body > :nth-child(1) > .formInput').type('Akeem')
        cy.get('#visitorPass_visitorType').select('Family')

    
        
    })
})
