/// <reference types= "cypress" />

describe("Instanta Regression API Test suite",  () => {
  it("Get All Work requests", () => {
    cy.request({
      method: "GET",
      url: "http://test.facility.instanta.app/api/workRequests",
    }).as("searchAllArticleRequests");
    cy.get("@searchAllArticleRequests").then((res) => {
      cy.log(JSON.stringify(res.body));
    });



  });
  
});
