# putainde-localstorage

[![Build Status](http://img.shields.io/travis/putaindecode/localstorage.svg?style=flat)](https://travis-ci.org/putaindecode/localstorage)

[![browser support](https://ci.testling.com/putaindecode/localstorage.png)](https://ci.testling.com/putaindecode/localstorage)

> A simple localStorage abstraction

`localstorage` allow you to easily store & use JSON data.

## Installation

You can install putainde-localstorage from **npm**

```shell
$ npm install putainde-localstorage
```

putainde-localstorage can obviously be downloaded directly.

## Usage

```js
var localstorage = require("putainde-localstorage")
var storage = localstorage.create({namespace: "myComponent"})
// same as
var LocalStorage = require("putainde-localstorage")
var storage = new LocalStorage({namespace: "myComponent"})

// set & get
storage.set("foo", {bar: "baz"})
storage.get("foo") // => {bar: "baz"}

// remove
storage.remove("foo")

// remove all
storage.clear()
```

### `localstorage.create(options)` > `storage`

Create a new instance (== `new localstorage(options)`)

#### options

##### options.namespace

Use a namespace for all your data stored (default `storage.`)

### `storage.set(key, value)`

Setter. Accept string, numeric, object...

### `storage.set({key: value})`

Alternative way to set (multiple) value(s).

### `storage.get(key)`

Getter.

### `storage.get()`

Returns all values.

### `storage.remove(key)`

Remove a value.

### `storage.clear()`

Remove all values.

---

## Contributing

Work on a branch, install dev-dependencies, respect coding style & run tests before submitting a bug fix or a feature.

```bash
git clone https://github.com/putaindecode/localstorage.git
git checkout -b patch-1
npm install
npm test
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
