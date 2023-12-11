/// <reference types="cypress" />

// Visiter site web
describe("1ere suite de tests", () => {
  // function () remplacée par fonction flèchée
  it("Visiter demoqa", () => {
    cy.log("Visite du site demoqa");
    //cy.visit("www.google.fr");
    cy.visit("https://demoqa.com/text-box"); //Génère une errreur dans le log ??
  });
});
