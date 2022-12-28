# My NLP Project

# Table of contents

- [Motivation](#Motivation)
- [How to run](#how-to-run)
    - [Client development](#client-development)
    - [Server development](#server-development)
    - [Dependencies](#dependencies)
- [Development](#development)
- [License & Copyright](#license--copyright)

## Motivation

[(Back to top)](#table-of-contents)

The goal is to capture user input with an UI and process it through an **NLP** service. The service used in this example is [meaning cloud](https://www.meaningcloud.com/).

## How to run

[(Back to top)](#table-of-contents)

This Project was build with Node in version [14.17.3](https://nodejs.org/en/blog/release/v14.17.3/) . It is highly recommended to use the same version, since some of the
dependencies like `node-sass` require a node version not higher than 14.x.x..

If you are using a newer Version of node it is reccommended to have a look at [nvm](https://github.com/nvm-sh/nvm). This way it is easier to manage multiple node versions on the
machine.

### Important

To run the project you ``must`` provide a `.env` file in the root of the project containing the api key for meaningcloud. You will get the
meaningcloud api key after you registered an account at meaningcloud.

**.env**
`````.dotenv
API_KEY=<apikey>
`````

### Client development

[(Back to top)](#table-of-contents)

If you only want to develop the client you will operate in the `src/client/` package mostly. To start the client run

````npm
npm run build-dev
````

This will open your browser on the default port `8080` where you can develop the client.

### Server development

[(Back to top)](#table-of-contents)

You will find the server under `src/server`. To start the server run:

````npm
npm run start
````

The server also delivers the client if it is correctly build before the start of the server. To build the client, so that the server can use it run the following:

````npm
npm run build-prod
npm run start
````

If you want hotswap of the client files, while running the server you can use the following task

````npm
npm run build-prod-watch
````

## Dependencies

[(Back to top)](#table-of-contents)

* Node 14.17.3

# License & Copyright

[(Back to top)](#table-of-contents)

The project is based on the udacity frontend developer nano degree. 