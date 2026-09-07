# Frogger Game

#### Technologies: TypeScript, React, SCSS, Vite

A remake of the classic game Frogger where you have to navigate the frog safely through the traffic, over the river to reach your home. This a web based application that is mobile device friendly and adapts its size accordingly.

## Index

- [Installation and Run](#Install)
- [Scripts](#Scripts)
- [Screen Shots](#Shots)
- [Play Frogger](#Frogger)

## <a name="Install">Installation and Run</a>

Node 26 or newer is required.

- To clone the repo and run the game

```shell
$ git clone https://github.com/adrianeyre/frogger
$ cd frogger
$ npm install
$ npm start
```

## <a name="Scripts">Scripts</a>

| Script                  | What it does                                                |
| ----------------------- | ----------------------------------------------------------- |
| `npm start`             | Runs the Vite dev server on http://localhost:3000           |
| `npm run build`         | Typechecks, then builds the production site into `dist-web` |
| `npm run preview`       | Serves the built site locally                               |
| `npm test`              | Runs the Vitest suite once                                  |
| `npm run test:watch`    | Runs the Vitest suite in watch mode                         |
| `npm run test:coverage` | Runs the suite and reports coverage                         |
| `npm run typecheck`     | `tsc --noEmit`                                              |
| `npm run lint`          | ESLint over the whole repo                                  |
| `npm run format`        | Formats with Prettier                                       |
| `npm run format:check`  | Fails if anything is unformatted (what CI runs)             |

## <a name="Shots">Screen Shots</a>

[![Screenshot](https://raw.githubusercontent.com/adrianeyre/frogger/master/src/images/screenshot1.png)](https://raw.githubusercontent.com/adrianeyre/frogger/master/src/images/screenshot1.png 'Game View')

[![Screenshot](https://raw.githubusercontent.com/adrianeyre/frogger/master/src/images/screenshot2.png)](https://raw.githubusercontent.com/adrianeyre/frogger/master/src/images/screenshot2.png 'Game View')

## <a name="Play">Play Frogger</a>

- [Frogger](https://adrianeyre.github.io/frogger/) — published to GitHub Pages by the release workflow on every merge to `master`.
