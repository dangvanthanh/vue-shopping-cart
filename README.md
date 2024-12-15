# Vue Shopping Cart

![](screenshot.png)

## Technologies

- [Deno.js](https://deno.land/)
- [Hono](https://hono.dev/)
- [Vue.js](https://vuejs.org/)
- [PandaCSS](https://panda-css.com/)

## Development

- [x] Deno.js server
- [x] Vue.js client

## Gettting Started

Update enviroments in `web` and `server` folder then run command line

```bash
bun run dev
```

### Web (Frontend)

Rename `.env.example` to `.env` in client folder and update API enviroments.

```
VITE_ALOVA_TIPS=0
VITE_BASE_URL_API=http://localhost:8000
```

then run command line

```shell
bun run dev --filter=@app/web
```

### API (Backend)

Rename `.env.example` to `.env` in server folder then run command line:

```shell
bun run dev --filter=@app/server
```

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
