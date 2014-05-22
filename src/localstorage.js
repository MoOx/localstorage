;(function(root, name, output) {
  if (typeof define == "function" && define.amd) {
    return define([], output)
  }
  if (typeof module == "object" && module.exports) {
    module.exports = output()
  }
  else {
    root[name] = output()
  }
})(this.window, "localstorage", function() {

  var config = {
    prefix: "storage."
  }

  function setConfig(cfg) {
    config.prefix = cfg.prefix || "storage."
  }

  function getFromLocalStorage(key) {
    var value = localStorage.getItem(key);
    try {
      value =  JSON.parse(value);
    }
    catch (e) {
      // if (console) console.log(key + " doesnt seems to be JSON");
    }

    return value;
  }

  // Set item in localStorage
  function set(key, value) {
    if (typeof value === "object") {
      value =  JSON.stringify(value);
    }
    localStorage.setItem(config.prefix + key, value);
  }

  // Get item from localStorage
  function get(key, defaultValue) {
    return getFromLocalStorage(config.prefix + key) || defaultValue;
  }

  function getAll() {
    var data = {};

    for (var key in localStorage){
      if (key.indexOf(config.prefix) === 0) {
        data[key.replace(config.prefix, "")] = getFromLocalStorage(key);
      }
    }

    return data;
  }

  function remove(key) {
    localStorage.removeItem(config.prefix + key);
  }

  function removeAll() {
    for (var key in localStorage){
      if (key.indexOf(config.prefix) === 0) {
        localStorage.removeItem(key);
      }
    }
  }

  return {
    setConfig: setConfig,
    set: set,
    get: get,
    getAll: getAll,
    remove: remove,
    removeAll: removeAll,
    clean: removeAll,
    clear: removeAll
  }

});
