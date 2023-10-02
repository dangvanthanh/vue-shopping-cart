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

Make sure everything is centralized in one place (`deps.ts`)

```shell
$ moon run server:deps
```

After installation AppWrite, create `.env` in root folder and updated AppWrite environments.

```
APP_WRITE_API_ENDPOINT=
APP_WRITE_PROJECT_ID=
APP_WRITE_API_KEY=
```

For development, you need run command line:

```shell
## backend
$ moon run server:dev

## frontend
$ moon run client:dev
```

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
