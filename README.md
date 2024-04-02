# Vue Shopping Cart

![](screenshot.png)

## Technologies

- [Deno.js](https://deno.land/)
- [Hono](https://hono.dev/)
- [Vue.js](https://vuejs.org/)
- [PandaCSS](https://panda-css.com/)
- [AppWrite](https://appwrite.io/)

## Development

- [x] Deno.js server
- [x] Vue.js client
- [x] AppWrite is (BaaS - Backend as a service)

### Gettting Started

#### Frontend

Rename `.env.example` to `.env` in client folder and update API enviroments.

```
VITE_ALOVA_TIPS=0
VITE_BASE_URL_API=http://localhost:8000
```

then run command line

```shell
$ turbo run dev --filter=web
```

### Backend

Rename `.env.example` to `.env` in server folder and update AppWrite enviroments.

```
APP_WRITE_API_ENDPOINT=
APP_WRITE_PROJECT_ID=
APP_WRITE_API_KEY=
```

Make sure everything is centralized in one place (`deps.ts`)

```shell
$ turbo run deps --filter=server
```

then run command line:

```shell
$ turbo run dev --filter=server
```

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
