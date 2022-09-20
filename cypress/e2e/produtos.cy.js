/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() //Selecionar o primeiro
            //.last() //Selecionar o último
            .eq(3) //Selecionar em uma posição específica (0,1,2,3...)
            //.contains('Ariel Roll Sleeve Sweatshirt') //Selecionar pelo nome
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10
        cy.get('[class="product-block grid"]')
            .eq(3)
            .click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

    });

});