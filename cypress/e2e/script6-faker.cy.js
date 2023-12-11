/// <reference types="cypress" />

// Installation de Faker
// Taper dans le terminal : npm install --save-dev @faker-js/faker

//Var
//const { faker } = require("@faker-js/faker"); //Déclaration bibliothèque Faker dans la constante faker
import { faker } from "@faker-js/faker";
let lastname = faker.name.lastName();
let firstname = faker.name.firstName();
let age = faker.number.int({ min: 18, max: 70 }); //Pour l'age définir un nombre entier avec option min , max
let email = faker.internet.email({ firstName: firstname, lastName: lastname }); //.internet pour les coordonnées
//option de formatage Nom Prénom pour l'email

//Visiter Formualire
describe("faker", () => {
  //function () remplacée par fonction flèchée
  it("Fake Data Formulaire", () => {
    cy.visit("/Mon_formulaire.html"); //Index Site local à la racine
    cy.get("#Lastname").type(lastname).should("have.value", lastname); //Nom aléatoire
    cy.get("#Firstname").type(firstname).should("have.value", firstname); //Prénom aléatoire
    cy.get("#email").type(email).should("have.value", email); //Email aléatoire
    cy.get("#age").type(age).should("have.value", age); //Age aléatoire
  });
});
