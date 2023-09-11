/// <reference types="cypress" />

//Esse cenario de teste tem como objetivo testar a função adicionar conta.
//Autor: Vinicius gomes andrade

const { faker } = require('@faker-js/faker');

describe('Primeiro fazer login no site', () => {
    beforeEach(() => {
      cy.visit('https://seubarriga.wcaquino.me/login')
      cy.get('#email').type('vinijk91@gmail.com')
      cy.get('#senha').type('xvrDCXmz5MUGqpD')
      cy.get('.btn').click()
      cy.get('.alert').should('contain','Bem vindo')
    })
    afterEach( () => {
        cy.screenshot()

    });

    it('login no site seubarriga', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').click()
        cy.get('#nome').type(faker.name.fullName())
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Conta adicionada com sucesso!')

    })
  
  })
  