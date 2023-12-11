/// <reference types="cypress" />

// 1ere syntaxe de suite de test (la plus utilisée)
describe("1ere suite de tests", function () {
  it("1er scénario", function () {
    cy.log("Execution du 1er scénario");
  });
});

// 2eme syntaxe de suite de test
context("2eme suite de tests", function () {
  specify("2eme scénario", function () {
    cy.log("Execution du 2eme scénario");
  });
});
