const supertest = require('supertest');
const chai = require('chai');
const app = require('../server');

const expect = chai.expect;
const request = supertest(app);

describe('Router de Products', () => {
  it('Debería obtener una lista de productos (GET /api/products)', async () => {
    const res = await request.get('/api/products');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('Debería obtener un producto específico (GET /api/products/:id)', async () => {
    // Supongamos que tienes un producto con ID 1 en tu base de datos
    const productId = 1;
    const res = await request.get(`/api/products/${productId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('name');
    expect(res.body).to.have.property('price');
  });

  it('Debería crear un nuevo producto (POST /api/products)', async () => {
    const newProduct = {
      name: 'Nuevo Producto',
      price: 99.99,
      category: 'Electrónica',
      description: 'Descripción del nuevo producto.',
    };

    const res = await request.post('/api/products').send(newProduct);
    expect(res.status).to.equal(201);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('name', newProduct.name);
  });
});

