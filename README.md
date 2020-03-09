# Shopping Cart

![](screenshot.png)

## Technologies

- Node.js
- Nest.js
- Nuxt.js (Vue.js with TypeScript) 
- MongoDB

## Development

[x] Lerna monorepo
[] TypeScript (linting and formatting)
[] Nest.js server
[] Nuxt.js client (Vue.js with Vue Composition API)


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