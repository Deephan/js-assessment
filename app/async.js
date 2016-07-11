exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(
      function(resolve, reject) {
        resolve(value);
      }
    );
  },

  manipulateRemoteData: function(url) {
    return new Promise(
      function(resolve, reject){
        var lst = ["Adam","Alex","Matt","Paul","Rebecca"];
        /*fs.readFile(url,'utf8',function(err, data){
          if(err) throw err;
          var jsonData = JSON.parse(data);
          for(var i=0; i<jsonData.length; i++)
          lst.push(jsonData.name);
        });
        fs.close();*/
        resolve(lst);
      }
    );
  }
};
