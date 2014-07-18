var localstorage = {
  get : function(key){
    var value = window.localStorage.getItem(key)

    try{
      value = JSON.parse(value)
    }
    catch(e) {
      if(console && console.warn) console.warn("'" + key + "'" + " isn't valid JSON: " + value)
    }

    return value || {}
  },

  set : function(key, value){
    return window.localStorage.setItem(key, JSON.stringify(value))
  },

  remove : function(key){
    return window.localStorage.removeItem(key)
  }
}

function Storage(cfg){
  cfg = cfg || {}
  this.ns = cfg.namespace || "storage"
  this.cache = {}
  // every write or read access should update the cache
}

Storage.create = function(cfg){
  return new Storage(cfg)
}

Storage.prototype = {
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

  get : function(key, defaultValue){
    this.cache = localstorage.get(this.ns)

    return this.cache[key] !== undefined ? this.cache[key] : defaultValue
  },

  getAll : function(){
    this.cache = localstorage.get(this.ns)

    return this.cache
  },

  remove : function(key){
    delete this.cache[key]

    return localstorage.set(this.ns, this.cache)
  },

  removeAll : function(){
    this.cache = {}

    return localstorage.remove(this.ns)
  }
}

Storage.prototype.clear = Storage.prototype.removeAll
Storage.prototype.clean = Storage.prototype.removeAll

module.exports = Storage
