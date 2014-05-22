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

Or using **bower**

```shell
$ bower install putainde-localstorage
```

putainde-localstorage can obviously be downloaded directly.

## Usage

### `localstorage.config(options)`

#### config.prefix

Use a prefix for all your data stored (default `storage.`)

### `localstorage.set(key, value)`

Setter. Accept string, numeric, object... (converted to JSON).

### `localstorage.get(key)`

Getter.

### `localstorage.getAll()`

Returns all values.

### `localstorage.remove(key)`

Remove a value.

#### `localstorage.clear()`

Remove all values.

#### `localstorage.clean()`

`clear()` alias.

#### `localstorage.removeAll()`

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
$ gulp
```

Now you can work on the file, then make a commit and a push something when gulp doesn't show any error.
Thanks.

## [License](LICENSE-MIT)
