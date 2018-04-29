# NewsSiteAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

This project is using:
- Yarn
- Angular 5+
- Jest - unit testing

## Getting started

You will need an API key from here: https://newsapi.org/register

You will need to insert your own key here:

```
/src/environments/environment.ts
export const environment = {
  production: false,
  news_key: '{YOUR_KEY}'
};

```


## Install your dependencies
```
yarn
```

## Serve the app
```
yarn serve
```

## Run units tests
```
yarn test
yarn test:watch          // runs and watches
```

## TODO:
- Add Angular Universal
- Add dates, and other missing fields
- Make News items open in a new page
- Install and add Cyress tests
- Error handling
