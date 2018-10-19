# Dashy

![](https://img.shields.io/badge/Node-v8.12.0-brightgreen.svg) ![](https://david-dm.org/sparkboom/dashy.svg)

A customizable personal dashboard app. 

## What is it?

Dashy is a [Node.js](https://nodejs.org/en/) app using [Hapi](http://hapijs.com/), and the usual suspects - [Webpack](https://webpack.js.org/), and [Babel](https://babeljs.io/).

Front-end uses [React](https://reactjs.org/), [Styled-Components](https://www.styled-components.com/), and [Semantic UI React](https://react.semantic-ui.com/)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com:sparkboom/dashy.git # or clone your own fork
cd dashy
yarn
yarn run build
yarn run start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Development 

To run the Webpack watcher for ease of development, use the following command

```sh
yarn run dev
```

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```
