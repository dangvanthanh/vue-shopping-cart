import { Application } from './deps/dactyl.ts';
import CategoriesController from './controllers/categories.controller.ts';
import ProductController from './controllers/product.controller.ts';
import ProductsController from './controllers/products.controller.ts';

const app: Application = new Application({
  controllers: [CategoriesController, ProductController, ProductsController],
  injectables: [],
});

app.useLogger().useCors().useTiming();

const PORT = 3000;
console.log(`Listening on port ${PORT}`);
await app.run(PORT);
