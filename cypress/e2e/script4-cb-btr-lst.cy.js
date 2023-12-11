/// <reference types="cypress" />

// Visiter site web
describe("CB - BT radio - Liste déroulante", () => {
  // function () remplacée par fonction flèchée
  it("CB Btr Formulaire", () => {
    cy.visit("/Mon_formulaire.html"); //Index Site local à la racine
    cy.get("#CB1").check().should("be.checked"); //Cocher CB1 + Assertion
    cy.get("#CB1").uncheck().should("not.be.checked"); //DéCocher CB1 + Assertion
    cy.get("#Btr2").check().should("be.checked"); //Cocher Btr2 + Assertion - Pas de uncheck car Btr ne se décoche pas
    cy.get("#Level").select("Easy").should("have.value", "Easy"); //Sélectionner Facile par la valeur Easy de l'option html + assertion sur value
    cy.get("#Level").select("Difficile").should("have.value", "Difficult"); //Sélectionner Difficile par le texte Difficile de l'option html+ assertion sur value
  });
});
