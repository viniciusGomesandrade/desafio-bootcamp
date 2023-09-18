/// <reference types="cypress" />

//Esse cenario de teste tem como objetivo testar a funcionalidade cadastro de login.

const { faker } = require('@faker-js/faker');

describe('FUNCIONALIDADE CADASTRO LOGIN', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get(':nth-child(2) > a').click()
    })
    afterEach( () => {
        cy.screenshot()

    });
    it('cadastro de usuario no site seubarriga com sucesso', () => {
        cy.get('#nome').type(faker.name.fullName())
        cy.get('#email').type(faker.internet.email())
        cy.get('#senha').type(faker.internet.password())
        cy.get('.btn').click()
        cy.get('.alert').should('contain','Usuário inserido com sucesso')
    })
    it('cadastro de usuario no site seubarriga com campo usuario vazio', () => {
        cy.get('#nome').type('  ')
        cy.get('#email').type(faker.internet.email())
        cy.get('#senha').type(faker.internet.password())
        cy.get('.btn').click()
        cy.get('.alert').should('contain','Usuário inserido com sucesso')
  })
    it('cadastro de usuario no site seubarriga com campo senha vazio', () => {
        cy.get('#nome').type('usuarionovo')
        cy.get('#email').type(faker.internet.email())
        cy.get('#senha').type('  ')
        cy.get('.btn').click()
        cy.get('.alert').should('contain','Usuário inserido com sucesso')
})

})
  