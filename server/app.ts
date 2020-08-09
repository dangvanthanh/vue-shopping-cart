import { Application, Router } from './deps/oak.ts';
import { oakCors } from './deps/cors.ts';
import ProductController from './controllers/product.ts';
import CategoryController from './controllers/category.ts';

const router = new Router();
router
  .get('/products/:id', ProductController.index)
  .get('/product/:id', ProductController.show)
  .get('/categories', CategoryController.index);

// Starting the server
const app = new Application();
const PORT = 3000;
app.use(oakCors()); // Enabled Cors
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Listening on port ${PORT}`);
await app.listen({ port: PORT });
