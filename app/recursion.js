exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
      var a = -1;
      var b = 1;
      var c = 0;
      for(var i=0; i<n; i++){
        a = b;
        b = c;
        c = a+b;
      }
      return c;
  },

  validParentheses: function(n) {

  }
};
