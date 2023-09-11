/// <reference types="cypress" />

//Esse cenario de teste tem como objetivo testar a função criar usuario e senha
//Autor: Vinicius gomes andrade

const { faker } = require('@faker-js/faker');

describe('Primeiro fazer login no site', () => {
    beforeEach(() => {
      cy.visit('https://seubarriga.wcaquino.me/login')
    })
    afterEach( () => {
        cy.screenshot()

    });

    it('login no site seubarriga', () => {
        cy.get(':nth-child(2) > a').click()
        cy.get('#nome').type(faker.name.fullName())
        cy.get('#email').type(faker.internet.email())
        cy.get('#senha').type('jfjfjfjjfjf')
        cy.get('.btn').click()
    })
  
  })
  