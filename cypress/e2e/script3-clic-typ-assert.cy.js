/// <reference types="cypress" />

// Visiter site web
describe("Selecteurs", () => {
  // function () remplacée par fonction flèchée
  it("Amazon", () => {
    cy.visit("https://www.amazon.fr/");
    cy.get("#sp-cc-accept").click(); //Accept cookies
    cy.get("#twotabsearchtextbox").type("clavier PC"); //Champ Recherche
    cy.get("#nav-search-submit-button").click(); //Bt loupe (Valider)

    cy.get("#twotabsearchtextbox").should("have.value", "clavier PC"); // Assertion sur valeur du champ recherche
    cy.contains("clavier PC").should("be.visible"); // Assertion Sélectionner par le contenu

    cy.get(".a-color-state")
      .should("be.visible")
      .and("include.text", "clavier PC"); //Assertion résultat pour "clavier PC"
  });
});
