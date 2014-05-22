var tape = require("tape")

var storage = require("../src/localstorage")

tape("localStorage", function(t){

  storage.set("foo", {bar: "baz"})
  t.same(storage.get("foo"), {bar: "baz"}, "Gets and sets correctly")

  storage.setConfig({prefix: "FOO."})
  t.notSame(storage.get("foo"), {bar: "baz"}, "Config can change prefix")
  storage.setConfig({prefix: "storage."}) // reset prefix

  storage.set("bar", {baz: "foo"})
  t.same(storage.getAll("bar"), {foo: {bar: "baz"}, bar: {baz: "foo"}}, "Get all works correctly")

  storage.set("foo", {foo: "bar"})
  storage.remove("foo")
  t.equal(storage.get("foo"), undefined, "Succesfully removes value")

  storage.clear()
  t.same(storage.getAll(), {}, "clear works")

  t.end()
})
