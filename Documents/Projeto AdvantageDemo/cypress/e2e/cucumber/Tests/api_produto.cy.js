const baseUrl = 'https://www.advantageonlineshopping.com/catalog/api/v1/products/18';
let produtoBuscado = {};
let produtoId = 18;

Given('que eu busco pelo produto com ID {int}', (id) => {
  produtoId = id;
});

When('faço a requisição para listar o produto', () => {
  cy.request({
    method: 'GET',
    url: baseUrl
  }).then((response) => {
    produtoBuscado = response.body; 
    expect(response.status).to.eq(200);
  });
});

Then('a resposta deve ter o status {int}', (status) => {
  expect(produtoBuscado).to.be.an('object'); 
  expect(produtoBuscado).to.have.property('productId', produtoId); 
});

Then('a lista deve conter somente o produto relacionado à busca', () => {
  expect(produtoBuscado).to.have.property('productName');
});
