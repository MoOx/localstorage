/**
 * global variables
 */
var namespace = ""
var cache = {}

function getCache(ns){
  if(cache[ns] === undefined) {
    cache[ns] = storageEngine.get(ns) || {}
  }

  return cache[ns]
}

function setCache(ns, c){
  cache[ns] = c
  return storageEngine.set(ns, cache[ns])
}

/**
 * Expose library
 */
module.exports = Storage

/**
 * Constructor
 * @param {Object} cfg options
 */
function Storage(cfg){
  cfg = cfg || {}
  this.ns = cfg.namespace || "storage"
}

/**
 * nicer constructor
 * @param  {Object} cfg options
 * @return {Object} Storage instance
 */
Storage.create = function(cfg){
  return new Storage(cfg)
}

/**
 * Storage API
 * @type {Object}
 */
Storage.prototype = {
  /**
   * setter
   *
   * @param {String|Object} key   key or an {key: value} object
   * @param {Object} value value if first parameter is a key
   */
  set : function(key, value){
    var c = getCache(this.ns)

    // set({foo: "bar"})
    if(arguments.length === 1 && typeof key === "object") {
      Object.keys(key).forEach(function(k){
        c[k] = key[k]
      }, this)
    }

    // set("foo", "bar")
    else {
      c[key] = value
    }

    return setCache(this.ns, c)
  },

  /**
   * getter
   *
   * @param  {Object} key
   * @param  {Object} defaultValue
   * @return {Object} value corresponding to key or all values if no key provided
   */
  get : function(key, defaultValue){
    var c = getCache(this.ns)

    if(arguments.length === 0) {
      return c
    }

    return c[key] !== undefined ? c[key] : defaultValue
  },

  /**
   * remove value corresponding to the given key
   * @param  {String} key
   */
  remove : function(key){
    var cache = getCache(this.ns)
    delete cache[key]
    setCache(this.ns, cache)
  },

  /**
   * remove all values
   */
  clear : function(){
    setCache(this.ns, {})
  }
}

/**
 * localStorage engine
 * @type {Object}
 */
var storageEngine = {
  get : function(key){
    var value = window.localStorage.getItem(namespace + key)

    try{
      value = JSON.parse(value)
    }
    catch(e) {
      if(console && console.warn) console.warn("'" + key + "'" + " isn't valid JSON: " + value)
    }

    return value || {}
  },

  set : function(key, value){
    return window.localStorage.setItem(namespace + key, JSON.stringify(value))
  },

  remove : function(key){
    return window.localStorage.removeItem(namespace + key)
  }
}
