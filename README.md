# React Redux Node Webpack4

- SSR ready.
- Testing with **[Jest](https://jestjs.io/)** and **[Enzyme](https://airbnb.io/enzyme/)**.
- Usign **[MaterialUI](https://material-ui.com/getting-started/usage/)** v.4. (MUI styles are included when SSR)
- Templates built using **[pug/jade](https://pugjs.org/api/getting-started.html)** template engine.
  
&nbsp;
## Getting started

- Create .env file with the following variables:

```
  BASE_NAME=
  HOST=
  NODE_ENV=
  PORT=
```
  
For example:
  
```
  BASE_NAME=/
  HOST=http://localhost:3000/
  NODE_ENV=development
  PORT=3000
```
  
&nbsp;
## Install, build and run
*(\*) Node environment and Webpack mode depends on **NODE_ENV** value set in **.env** file.*  

- Install dependencies:  
```
$ yarn
```
  
- Bundle app using webpack and start node server:  
```
$ yarn build
$ yarn start
```

- Start **[dev-server](https://webpack.js.org/configuration/dev-server)** with **[HMR](https://webpack.js.org/concepts/hot-module-replacement/)**:  
```
$ yarn dev
```
  
&nbsp;
## Testing

- Test app:
```
$ yarn test
```
  
- Test on every file change:
```
$ yarn test:watch
```
  