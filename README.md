[![Version][npm version]][npm url] ![License][license] [![test][test workflow]][test result]

# Waze API

Node.js wrapper for Waze.

# About

The motivation with this module is to provide a wrapper over waze in node js.

# Getting Started

Install Waze API:

```shell
npm i waze-api
```

or

```shell
yarn add waze-api
```

# Example:

- Get traffic info

```js
import { WazeAPI } from "waze-api";
const waze = new WazeAPI();
const res = await waze.getInfo(lat, lng, {
  hideAlerts: false,
  hideTraffic: false,
  hideUsers: false,
});
// jams == traffic
console.log(res.jams);
console.log(res.alerts);
console.log(res.users);
```

- Get paths

```js
import { WazeAPI } from "waze-api";
const waze = new WazeAPI();
const res = await waze.getPaths({
  from: { y: lat1, x: lng1 },
  to: { y: lat2, x: lng2 },
  nPaths: 3,
  useCase: "LIVEMAP_PLANNING",
  interval: 15,
  arriveAt: true,
});
console.log(res.alternatives);
```

# API

## .getInfo( lat, lng, options )

Get waze traffic info

- lat -> latitude
- lng -> longitude
- options:
  - hideTraffic -> if true don't request jams (default to false)
  - hideAlerts -> if true don't request alerts (default to false)
  - hideUsers -> if true don't request users (default to false)

## .getPaths( options )

Get Paths between two points

- options:
  - from -> origin
  - to -> destination
  - nPaths -> number of paths
  - useCase -> waze use case
  - interval -> points interval
  - arriveAt -> enable arrival time

# Licence

MIT

[test workflow]: https://github.com/Akuqt/waze-api/actions/workflows/test.yml/badge.svg
[test result]: https://github.com/Akuqt/waze-api/actions/workflows/test.yml
[npm version]: https://img.shields.io/npm/v/waze-api.svg?logo=npm
[npm url]: https://www.npmjs.com/package/waze-api
[license]: https://img.shields.io/npm/l/waze-api
