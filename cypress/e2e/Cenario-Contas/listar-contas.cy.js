/// <reference types="cypress" />

//Esse cenario de teste tem como objetivo testar a função listar contas.
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
        cy.get('.dropdown-menu > :nth-child(2) > a').click()

    })
    it('editar contas', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href="/editarConta?id=1865661"] > .glyphicon').click()
        cy.get('.form-group').click()
        cy.get('#nome').clear()
        cy.get('#nome').type(faker.name.fullName())
        cy.get('.btn').click()
        cy.get('.alert').should('contain','Conta alterada com sucesso!')
    })
    it('excluir contas', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href="/removerConta?id=1898978"] > .glyphicon').click()
        cy.get('.alert').should('contain','Conta removida com sucesso!')

    })

  })
  