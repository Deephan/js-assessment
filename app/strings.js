exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var prev = curr = '';
    var count = 1;
    var res = "";
    prev = curr = str[0];
    res += curr;
    for(var i=1;i<str.length; i++) {
      curr = str[i];
      if(prev==curr){
        if(count < amount) res += curr;
        count++;
      } else if(prev!=curr){
        res += curr;
        count = 1;
      }
      prev = curr;
    }
    return res;
  },

  wordWrap: function(str, cols) {
    var res = "";
    var words = str.split(" ");
    res = words[0];
    for(var i=1; i<words.length; i++ ){
      var word = words[i];
      if((res+" "+word).length <= cols)
      res += " "+word;
      else
      res += "\n"+word;
    }
    return res;
  },

  reverseString: function(str) {
      return str.split("").reverse().join("");
  }
};
