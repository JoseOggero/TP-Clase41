const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de tu proyecto',
      version: '1.0.0',
      description: 'Documentación de las API de tu proyecto',
    },
  },
  apis: ['./routers/productsRouter.js', './routers/cartsRouter.js'],
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});