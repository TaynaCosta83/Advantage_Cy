# language: pt
Funcionalidade: Busca de Produtos

  Cenário: Buscar um produto e verificar os resultados
    Dado que eu busco pelo produto com ID 18
    Quando faço a requisição para listar o produto
    Então a resposta deve ter o status 200
    E a lista deve conter somente o produto relacionado à busca
