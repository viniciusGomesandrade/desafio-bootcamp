/// <reference types="cypress" />

//Esse cenario de teste tem como objetivo testar a funcionalidade sair.
//Autor: Vinicius gomes andrade

const { faker } = require('@faker-js/faker');

describe('FUNCIONALIDADE SAIR', () => {
    beforeEach(() => {
      cy.visit('https://seubarriga.wcaquino.me/login')
      cy.get('#email').type('joao@joao.com.br')
      cy.get('#senha').type('1234')
      cy.get('.btn').click()
      cy.get('.alert').should('contain','Bem vindo')
    })
    afterEach( () => {
        cy.screenshot()
    });
    it('funcao sair', () => {
        cy.get(':nth-child(5) > a').click()
    })
})