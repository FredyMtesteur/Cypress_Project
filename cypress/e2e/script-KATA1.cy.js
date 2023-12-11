/// <reference types="cypress" />
//Var faker
const { faker } = require("@faker-js/faker"); //Déclaration bibliothèque Faker dans la constante faker
let lastname = faker.person.lastName();
let firstname = faker.person.firstName();
let age = faker.number.int({ min: 18, max: 70 });
let email = faker.internet.email({ firstName: firstname, lastName: lastname }); //option de formatage Nom Prénom pour l'email

// Prérequis
beforeEach("Accès au formulaire", () => {
  cy.visit("/KATA1-index.html");
});

// Scénarios
describe("Scénarios de test fromulaire d'inscription", () => {
  it("Scénario 1 Form KATA1", () => {
    //Etant donné que j'ouvre la page du formulaire
    //Alors toutes les questions devraient être visible
    //Et tous les champs doivent être cliquables

    //Assertions sur visibilité des 3 questions
    cy.get("#recom-lab").should("be.visible"); //Assertion question 1 (Recommandations)
    cy.get("#frameworks-lab").should("be.visible"); //Assertion question 2 (les frameworks)
    cy.get("#html-lab").should("be.visible"); //Assertion question 2 (les frameworks)

    //Assertions Champs visibles et cliquables
    cy.get("#lastName").should("be.visible").should("be.enabled"); //Champ Nom
    cy.get("#firstName").should("be.visible").should("be.enabled"); //Champ Prénom
    cy.get("#email").should("be.visible").should("be.enabled"); //Champ email
    cy.get("#age").should("be.visible").should("be.enabled"); //Champ âge
    cy.get("#html-sel").should("be.visible").should("be.enabled"); //Champ selection liste
    cy.get("#suggestions").should("be.visible").should("be.enabled"); //Champ suggestions
  });

  it("Scénario 2 Form KATA1", () => {
    //Etant donné que je suis sur la page du formulaire
    //Quand Je clique sur 'Envoyer' à la fin du formulaire alors que je n'ai pas rempli tous les champs obligatoires
    //Alors Un message d'information apparaît pour m'indiquer le champs obligatoire à remplir.

    //Assertion champs requis
    cy.get("#submit-bt").click(); //Cliquer sur envoyer aucun champs remplis
    cy.get("#notification")
      .should("be.visible")
      .and("include.text", "Veuillez remplir tous les champs requis."); //Message erreur champs requis
  });

  it("Scénario 3 Form KATA1", () => {
    //Etant donné que Je suis sur la page du formulaire
    //Quand Je clique sur 'Envoyer' après avoir complété tous les champs.
    //Alors Aucun message d'erreur n'apparait.

    //Remplissage champs obligatoires
    cy.get("#lastName").type(lastname).should("have.value", lastname); //Nom aléatoire
    cy.get("#firstName").type(firstname).should("have.value", firstname); //Prénom aléatoire
    cy.get("#email").type(email).should("have.value", email); //Email aléatoire
    cy.get("#age").type(age).should("have.value", age); //Age aléatoire

    //Cliquer sur envoyer champs remplis
    cy.get("#submit-bt").click();

    //Assertion pas de message
    cy.get("#notification").should("not.be.visible");
  });
});
