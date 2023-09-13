/// <reference types="cypress" />

//Esse cenario de teste tem como objetivo testar a função criar usuario e senha
//Autor: Vinicius gomes andrade

const { faker } = require('@faker-js/faker');

describe('FUNCIONALIDADE LOGIN', () => {
    beforeEach(() => {
      cy.visit('https://seubarriga.wcaquino.me/login')
    })
    afterEach( () => {
        cy.screenshot()

    });
    it('login com sucesso no site seubarriga', () => {
      cy.get('#email').type('vinijk91@gmail.com')
      cy.get('#senha').type('xvrDCXmz5MUGqpD')
      cy.get('.btn').click()
      cy.get('.alert').should('contain','Bem vindo')
  })
    it('cadastro de usuario no site seubarriga com sucesso', () => {
        cy.get(':nth-child(2) > a').click()
        cy.get('#nome').type(faker.name.fullName())
        cy.get('#email').type(faker.internet.email())
        cy.get('#senha').type('jfjfjfjjfjf')
        cy.get('.btn').click()
        cy.get('.alert').should('contain','Usuário inserido com sucesso')
    })
    it('cadastro de usuario no site seubarriga com campo usuario vazio', () => {
      cy.get(':nth-child(2) > a').click()
      cy.get('#nome').type('  ')
      cy.get('#email').type(faker.internet.email())
      cy.get('#senha').type(faker.internet.password())
      cy.get('.btn').click()
      cy.get('.alert').should('contain','Usuário inserido com sucesso')

  })

})
  