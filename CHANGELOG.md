# 3.0.0 - 2014-02-05

- Changed: `create()` now share namespace with registry with instances with the same namespace

# 2.1.0 - 2014-09-25

- Added: ability to use a global namespace

# 2.0.0 - 2014-06-18

- Changed: `get()` without argument now return all values
- Removed: `getAll()` has been removed
- Removed: `removeAll()` has been removed
- Removed: `clean()` has been removed

# 1.1.0 - 2014-06-18

- Added: `set()` now accept an object with key, value

# 1.0. - 2014-06-17

- Changed: api change: `prefix` is now `namespace`
- Fixed: you can store boolean
- Added: you can now use multiple instance with differents namespaces (`storage.create()` returns an new instance). Now you cannot change options on runtime (too dangerous).

# 0.2.0 - 2014-06-18

- Removed: bye bower
- Removed: bye umd

# 0.1.0 - 2014-05-22

✨ Initial release
