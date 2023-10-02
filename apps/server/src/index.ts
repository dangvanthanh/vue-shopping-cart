import { Hono, cors } from "./deps.ts";
import { products, categories } from "./config/sampleDB.ts";

const app = new Hono();

const productsData = Array.from(products.values());
const categoriesData = Array.from(categories.values());

app
  .use("/products/*", cors())
  .get("/products", (c) => c.json({ ok: true, data: productsData }))
  .get("/products/:category", (c) => {
    const category = c.req.param("category");
    const newCatategory = categoriesData.find((cat) => cat.slug === category);
    const newProducts = productsData.filter(
      (product) => product.category === newCatategory.id
    );

    return c.json({
      ok: true,
      data: newProducts,
    });
  })
  .get("/products/others/:id", (c) => {
    const id = c.req.param("id");
    const product = productsData.find((p) => p.id === id);
    const newProducts = productsData.filter(
      (p) => p.category === product.category && p.id !== id
    );
    const othersProduct = newProducts.slice(0, 3).map(function () {
      return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, newProducts.slice());

    return c.json({
      ok: true,
      data: othersProduct,
    });
  })
  .use("/product/*", cors())
  .get("/product/:id", (c) => {
    const id = c.req.param("id");
    const product = productsData.find((p) => p.id === id);

    return c.json({
      ok: true,
      data: product,
    });
  })
  .use("/categories/*", cors())
  .get("/categories", (c) => c.json({ ok: true, data: categoriesData }));

Deno.serve(app.fetch);
