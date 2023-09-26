describe('Router de Carts', () => {
    it('Debería obtener el contenido de un carrito (GET /api/carts/:cid)', async () => {
      const cartId = 1;
      const res = await request.get(`/api/carts/${cartId}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  
    it('Debería agregar un producto al carrito (POST /api/carts/:cid/products)', async () => {
      const cartId = 1;
      const productId = 2;
      const quantity = 2;
  
      const res = await request
        .post(`/api/carts/${cartId}/products`)
        .send({ productId, quantity });
  
      expect(res.status).to.equal(201);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('productId', productId);
      expect(res.body).to.have.property('quantity', quantity);
    });
  
    it('Debería eliminar un producto del carrito (DELETE /api/carts/:cid/products/:pid)', async () => {
      const cartId = 1;
      const productId = 2;
  
      const res = await request.delete(`/api/carts/${cartId}/products/${productId}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('message', 'Producto eliminado del carrito');
    });
  });
  
  