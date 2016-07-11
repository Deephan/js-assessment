exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    obj.fn = fn;
    return obj.fn();
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate: function(obj) {
    var res = [];
    for(var key in obj){
      res.push("'"+key+": "+obj[key]+"'")
    }
    return res;

  }
};
