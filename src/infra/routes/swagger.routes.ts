import { Router } from 'express';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');

const swaggerRouter = Router();

swaggerRouter.use('/api-docs', swaggerUi.serve);
swaggerRouter.get('/api-docs', swaggerUi.setup(swaggerDocument));

export { swaggerRouter };