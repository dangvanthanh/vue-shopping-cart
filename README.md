# Vue Shopping Cart

![](screenshot.png)

## Technologies

- [Deno.js](https://deno.land/)
- [Hono](https://hono.dev/)
- [Vue.js](https://vuejs.org/)
- [PandaCSS](https://panda-css.com/)
- [AppWrite](https://appwrite.io/)
- [Moon](https://moonrepo.dev/)

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
$ moon run client:dev
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
$ moon run server:deps
```

then run command line:

```shell
$ moon run server:dev
```

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
