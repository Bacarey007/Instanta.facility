/// <reference types= "cypress" />

describe("Instanta Regression API Test suite",  () => {
  it("Get All Work requests", () => {
    cy.request({
      Method: "GET",
      url: "/"+ "/api/workRequests",
    }).as("searchAllArticleRequests");
    cy.get("@searchAllArticleRequests").then((res) => {
      cy.log(JSON.stringify(res.body));
    });



  });
  
});
