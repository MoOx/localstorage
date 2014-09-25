/**
 * global variables
 */
var namespace = ""

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
  this.cache = {}
  // every write or read access should update the cache
}

/**
 * set a global namespace
 *
 * @param {String} ns global namespace
 */
Storage.setGlobalNamespace = function(ns){
  if(ns !==  "") {
    ns += "."
  }

  namespace = ns
}

/**
 * clear the global namespace
 */
Storage.clearGlobalNamespace = function(){
  namespace = ""
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

    // set({foo: "bar"})
    if(arguments.length === 1 && typeof key === "object") {
      Object.keys(key).forEach(function(k){
        this.cache[k] = key[k]
      }, this)
    }

    // set("foo", "bar")
    else {
      this.cache[key] = value
    }

    return localstorage.set(this.ns, this.cache)
  },

  /**
   * getter
   *
   * @param  {Object} key
   * @param  {Object} defaultValue
   * @return {Object} value corresponding to key or all values if no key provided
   */
  get : function(key, defaultValue){
    this.cache = localstorage.get(this.ns)

    if(arguments.length === 0) {
      return this.cache
    }

    return this.cache[key] !== undefined ? this.cache[key] : defaultValue
  },

  /**
   * remove value corresponding to the given key
   * @param  {String} key
   */
  remove : function(key){
    delete this.cache[key]

    return localstorage.set(this.ns, this.cache)
  },

  /**
   * remove all values
   */
  clear : function(){
    this.cache = {}

    return localstorage.remove(this.ns)
  }
}

/**
 * localStorage engine
 * @type {Object}
 */
var localstorage = {
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
