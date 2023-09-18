/// <reference types="cypress" />

//Esse cenario de teste tem como objetivo testar a funcionalidade LOGIN.
//Autor: Vinicius gomes andrade
const { faker } = require('@faker-js/faker');

describe('FUNCIONALIDADE LOGIN', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
     
    })
    afterEach( () => {
        cy.screenshot()
    });
    it('login com sucesso', () => {
        cy.get('#email').type('joao@joao.com.br')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        cy.get('.alert').should('contain','Bem vindo')
    })
    it('login com email e senha incorretos', () => {
        cy.get('#email').type('oao@antonio.com.br')
        cy.get('#senha').type('2345')
        cy.get('.btn').click()
        cy.get('.alert').should('contain','Problemas com o login do usuário')
      })
      it('login com email valido e senha incorreta', () => {
        cy.get('#email').type('joao@joao.com.br')
        cy.get('#senha').type('5678')
        cy.get('.btn').click()
        cy.get('.alert').should('contain','Problemas com o login do usuário')
      })


})