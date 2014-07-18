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

### `storage.getAll()`

Returns all values.

### `storage.remove(key)`

Remove a value.

#### `storage.clear()`

Remove all values.

#### `storage.clean()`

`clear()` alias.

#### `removeAll()`

`clear()` alias.

---

## [Changelog](CHANGELOG.md)

## Contributing

Please read the file nobody reads (make me lie) [CONTRIBUTING.md](CONTRIBUTING.md)

### tl;dr;

Fork, clone, then

```shell
$ npm i -g gulp
$ npm i
$ npm run watch
```

Now you can work on the file, then make a commit and a push something when gulp doesn't show any error.

To run browsers tests, please use

```shell
$ npm run testling
```

Thanks.

## [License](LICENSE-MIT)
