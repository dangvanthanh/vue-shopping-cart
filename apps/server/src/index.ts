import { Hono, cors } from "./deps.ts";
import { products, categories } from "./config/sampleDB.ts";

const app = new Hono();

app
  .use("/products/*", cors())
  .get("/products", (c) =>
    c.json({ ok: true, data: Array.from(products.values()) })
  )
  .get("/products/:category", (c) => {
    const category = c.req.param("category");
    const newProducts = [];
    let newCat;

    for (let cat of categories.values()) {
      if (cat.slug === category) {
        newCat = cat;
        break;
      }
    }

    for (let product of products.values()) {
      if (product.category === newCat.id) {
        newProducts.push(product);
      }
    }

    return c.json({
      ok: true,
      data: newProducts,
    });
  })
  .use("/categories", cors())
  .get("/categories", (c) =>
    c.json({ ok: true, data: Array.from(categories.values()) })
  );

Deno.serve(app.fetch);
