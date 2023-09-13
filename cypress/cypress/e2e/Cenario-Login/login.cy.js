/// <reference types="cypress" />

//Esse cenario de teste tem como objetivo testar a função login.
//Autor: Vinicius gomes andrade

describe('Primeiro acessar o site', () => {
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
  
  })
  