# Coin-Machine

Convert any us dollar amount into a series of coins.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You must have [NodeJS](https://nodejs.org/) installed to run this project. Please see the [NodeJS install page](https://nodejs.org/en/download/) on how to install NodeJS.

This project also utilizes [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), thus you must have the [yarn package manager](https://yarnpkg.com/) installed to run this project. For information on how to install Yarn visit the classic [yarn installion](https://classic.yarnpkg.com/en/docs/install) documentation.

If you're new to repositories or the git package manager I would suggest looking at [try.github.io](https://try.github.io/).

### Installing

Running `yarn install` will install all of the dependencies needed for this repo.

## Running the tests

We use [Jest](https://jestjs.io/) for client-side testing and [Tape](https://github.com/substack/tape) for server-side testing.

After installing running `yarn test` will sequentially run all testing suites. If you'd prefer to see an individual testing suite run `yarn test:client` or `yarn test:server` for the client and server test suites respectively.

## Development

To run both the server and client in parallel run `yarn dev`.
The client will run on `http://localhost:8080/` and server on `http://localhost:8000/`

To see the application after running `yarn dev` go to [http://localhost:8080/](http://localhost:8080/)

## Built With

* [React](https://reactjs.org/) - User interface library
* [TailwindCSS](https://tailwindcss.com/) - Styling library
* [react-hook-form](https://react-hook-form.com/) - A handy form library
* [koa](https://koajs.com/) - Node Server framework
* [Jest](https://jestjs.io/) - Node Testing framework
* [Testing-Library](https://testing-library.com/) - Testing Utilities
* [TypeScript](https://www.typescriptlang.org/) - A typed JavaScript superset

## Authors

* **Thomas Dillard** - *Initial work* - [ThomasDillard.com](https://www.thomasdillard.com/)

## License

This project is licensed under the MIT License

## Acknowledgments

* Hat tip to anyone whose code was used
* The opportunity to take this exercise
