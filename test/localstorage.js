var test = require("tape")

var storage = require("../")

var strg = storage.create()
var strg2 = storage.create({namespace : "FOO"})

test("get & set should work with default namespace", function(t){
  strg.set("foo", {bar : "baz"})
  t.same(strg.get("foo"), {bar : "baz"}, "Gets and sets correctly")

  strg.set("bar", {baz : "foo"})
  t.same(strg.getAll("bar"), {foo : {bar : "baz"}, bar : {baz : "foo"}}, "Get all works correctly")

  strg.set("boo", true)
  t.same(strg.get("boo"), true, "true booleans are working correctly")
  strg.set("boo", false)
  t.same(strg.get("boo"), false, "false booleans are working correctly")

  strg.set({foo : "bar", bar : "baz", boo : false})
  t.same(strg.getAll(), {foo : "bar", bar : "baz", boo : false}, "set accept an object of keys/values")

  t.end()
})

test("get & set should work with custom namespace", function(t){
  t.notSame(strg2.get("foo"), {bar : "baz"}, "values from other namespace shouldn't be accessible")

  strg.set("foo", "not bar")
  strg2.set("foo", "bar")
  t.same(strg2.get("foo"), "bar", "values are correctly namespaced")
  t.notSame(strg.get("foo"), strg2.get("foo"), "values from differentes instances are correctly namespaced")

  t.end()
})

test("remove works", function(t){
  strg.set("foo", {foo : "bar"})
  strg.remove("foo")
  t.equal(strg.get("foo"), undefined, "Succesfully removes value")

  t.end()
})

test("clear works", function(t){
  strg.set("foo", {foo : "bar"})
  strg.set("bar", {baz : "foo"})
  strg.clear()
  t.same(strg.getAll(), {}, "clear works")

  t.end()
})
