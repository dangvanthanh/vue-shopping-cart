# Shopping Cart

![](screenshot.png)

## Technologies

- Hapi.js
- Nuxt.js

## Database

- MongoDB

## Development

- [x] Lerna monorepo
- [] TypeScript (linting and formatting)
- [] Hapi.js server
- [] Nuxt.js client


## Getting Started

### Lerna monorepo

```
$ npm install -g lerna
$ cd vue-shopping-cart
$ lerna init --independent
```

Let's adjust `lerna` so we can benefit from npm workspaces:

```json
{
  "packages": [
    "packages/*"
  ],
  "version": "independent"
}
```