import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import ProductController from './controllers/product.ts';

const router = new Router();
router
  .get('/products', ProductController.index)
  .get('/product/:id', ProductController.show);

// Starting the server
const app = new Application();
const PORT = 3000;
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: PORT });
console.log(`Listening on port ${PORT}`);
