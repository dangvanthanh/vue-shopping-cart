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
    const newCat = Array.from(categories.values()).find(
      (cat) => cat.slug === category
    );
    const newProducts = Array.from(products.values()).filter(
      (product) => product.category === newCat.id
    );

    return c.json({
      ok: true,
      data: newProducts,
    });
  })
  .use("/product/*", cors())
  .get("/product/:id", (c) => {
    const id = c.req.param("id");
    const product = Array.from(products.values()).find((p) => p.id === id);

    return c.json({
      ok: true,
      data: product,
    });
  })
  .use("/categories/*", cors())
  .get("/categories", (c) =>
    c.json({ ok: true, data: Array.from(categories.values()) })
  );

Deno.serve(app.fetch);
