exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction: function(str) {
      return function(arg){
        return str+", "+arg;
      }
  },

  makeClosures: function(arr, fn) {
    var lst = [];
    var func = function(arg){
      return function() {
        return fn(arg);
      }
    }
    for(var i=0; i<arr.length; i++)
    lst.push(func(arr[i]));
    return lst;
  },

  partial: function(fn, str1, str2) {
      return function(arg){
        return fn(str1, str2, arg);
      }
  },

  useArguments: function() {
    var res = 0;
    for(var i=0; i<arguments.length; i++)
    res += arguments[i];
    return res;
  },

  callIt: function(fn) {
    return fn.apply(this, arguments);
  },

  partialUsingArguments: function(fn) {
    if(arguments.length==0)
    return function(arg1,arg2,arg3){
      return fn(arg1, arg2, arg3);
    }
    if(arguments.length==1)
    return function(arg2, arg3) {
      return fn(arguments[0], arg2, arg3);
    }
    if(arguments.length==2)
    return function(arg3) {
      return fn(arguments[0], arguments[1], arg3);
    }
    if(arguments.length==3)
    return fn(arguments[0], arguments[1], arguments[2]);
  },

  curryIt: function(fn) {
      return function(arg1){
          return function(arg2){
            return function(arg3){
              return fn(arg1,arg2,arg3);
            }
          }
      }
  }
};
