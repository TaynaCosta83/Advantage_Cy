
//Cenário: Busca de um produto

Given("que estou acessando o site Advantage Online Shopping", () => {
    cy.visit('https://advantageonlineshopping.com')
    cy.get('#menuCart')
    .should('be.visible');
    cy.get('.logoDemo').should('have.text', 'DEMO');
})
When("eu busco por um produto", () => {
    cy.get("#menuSearch")
    .click()
    cy.get('#autoComplete')
    .type("HP PRO TABLET 608 G1")
    .should('have.value', 'HP PRO TABLET 608 G1')
    cy.get("#menuSearch")
    .click()
});
Then("o sistema deve localizar o produto desejado", () => {
   cy.get('.productName').contains("HP Pro Tablet 608 G1")
    .click()
});


//Cenário: Inclusão de produto no carrinho

Given("que o produto foi localizado", () => {
    cy.visit('https://advantageonlineshopping.com/#/product/18');
    cy.get('#Description > .roboto-regular')
    .should('contain', 'HP PRO TABLET 608 G1');
});
When("eu clico em Adicionar ao Carrinho", () => {
    cy.get('[name="save_to_cart"]')
    .click();
});
Then("o produto deve ser adicionado ao meu carrinho de compras", () => {
    cy.visit('https://advantageonlineshopping.com/#/shoppingCart')
    cy.get('.ng-binding') 
    .contains('HP PRO TABLET 608 G1') 
    .should('be.visible');
})

// Cenário: Validação de produto no carrinho para pagamento

Given("que o produto foi adicionado ao carrinho", () => {
    cy.visit('https://advantageonlineshopping.com/#/product/18');
    cy.get('[name="save_to_cart"]')
    .click();
    cy.visit('https://advantageonlineshopping.com/#/shoppingCart')
    cy.get('#checkOutPopUp')
    .click()
    cy.get('.ng-binding') 
    .contains('HP PRO TABLET 608 G1') 
    .should('be.visible')
});
When("eu acesso a página de pagamento", () => {
    cy.get('#checkOutPopUp')
    .click()

});
Then("o produto deve estar presente no meu carrinho", () => {
    cy.get('.ng-binding') 
    .contains('HP PRO TABLET 608 G1') 
    .should('be.visible')
});
