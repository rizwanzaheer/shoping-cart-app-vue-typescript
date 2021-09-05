# order24-assignment

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```


## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
NODE_ENV=production
# Root API URL
VUE_APP_ROOT_API_URL=http://localhost:3000/
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Product Images
Product images are present in product folder under the src -> assets -> product
You can use these image to create the product when creating the product via APIs


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
