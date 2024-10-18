# language: pt

Funcionalidade: Busca e Adição de Produtos ao Carrinho
  Como usuário do sistema
  Quero buscar um produto e adicioná-lo ao meu carrinho de compras
  Para que eu possa finalizar a compra com exito

  Cenário: Busca de um produto
    Dado que estou acessando o site Advantage Online Shopping
    Quando eu busco por um produto
    Então o sistema deve localizar o produto desejado

  Cenário: Inclusão de produto no carrinho
    Dado que o produto foi localizado
    Quando eu clico em Adicionar ao Carrinho
    Então o produto deve ser adicionado ao meu carrinho de compras

 Cenário: Validação de produto no carrinho para pagamento
    Dado que o produto foi adicionado ao carrinho
    Quando eu acesso a página de pagamento
    Então o produto deve estar presente no meu carrinho