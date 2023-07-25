/// <reference types= "cypress" />

describe("Instanta Test Suite", () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => {
            return false

        })
        cy.visit("/")

    })
    it("Validate that the Instanta app launches successfully", () => { 
        //Write cypress tests.
        
        //Assert For every minutes shows.

        cy.contains("For every minute").should("be.visible")
        cy.contains('Scan QR Code').should("be.visible")
        cy.get('#username').type("admin@sysdesk.com")
        cy.get('#password').type("admin123")
        cy.get('#submitBtn').click()
        
        
    
        
    })
    it("Validate that the visitor's pass works successfully", () => { 
        //Write cypress tests. //Assert For every minutes shows.
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
    
        it("Validate that the Request portal works successfully", () => { 
            //Write cypress tests. 
            cy.get('#username').type("akeembacarey@gmail.com") 
            //Assert username was entered 
            cy.get('#password').type("Gunnersd12$") 
            //Assert password was entered 
            cy.get('#submitBtn').click() 
            //Assert Request portal is click 
            cy.contains('Request portal').click()
            //Assert create spacebooking works
            cy.contains('Create new').click()
            cy.contains('Space booking').click()
            cy.get(':nth-child(5) > .fc-content-skeleton > table > thead > tr > .fc-wed').click()
        }) 
    
}) 
    