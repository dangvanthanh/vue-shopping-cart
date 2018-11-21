# Shopping Cart

Simple shopping cart with Vue.js and Node.js

![](screenshot.png)

## Usage

### Backend with Node.js

```bash
$ cd backend 
$ npm run dev
```

The first time you need seeders data for products and categories.

```bash
$ curl http://localhost:3000/api/seeders
```

### Frontend with Vue.js

Create `.env.local` and update configuration

```
VUE_APP_BACKEND=http://localhost:3000/api
```

```bash
$ cd frontend 
$ npm run serve
```