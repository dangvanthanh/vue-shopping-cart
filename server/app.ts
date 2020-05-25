import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

// import {
//   getProduct,
//   addProduct,
//   updateProduct,
//   deleteProduct
// } from './controllers/product.ts';

// Router
// router
//   .get('/v1/getProduct', getProduct)
//   .post('/v1/addProduct', addProduct)
//   .patch('/v1/updateProduct', updateProduct)
//   .delete('/v1/deleteProduct', deleteProduct);

const products = new Map<string, any>();
products.set('1', {
  id: '1',
  title: 'Shifty Boa White 2020',
  description: 'Focused around comfort and flexibility'
});

const router = new Router();
router
  .get('/', context => {
    context.response.body = 'Shopyyy';
  })
  .get('/products', context => {
    context.response.body = Array.from(products.values());
  })
  .get('/product/:id', context => {
    if (
      context.params &&
      context.params.id &&
      products.has(context.params.id)
    ) {
      context.response.body = products.get(context.params.id);
    }
  });

// Starting the server
const app = new Application();
const PORT = 3000;
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}`);

await app.listen({ port: PORT });
