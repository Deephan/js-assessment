exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
  	for(var i = 0; i<arr.length; i++){
  		if(item==arr[i]) return i;
  	}
  	return -1;
  },

  sum: function(arr) {
  	var sum = 0;
  	for(var i=0; i<arr.length; i++) sum+=arr[i];
  	return sum;
  },

  remove: function(arr, item) {
  	var res = [];
  	for(var i=0; i<arr.length; i++) {
  		if(item!=arr[i])
  		res.push(arr[i]);
  	}
  	return res;
  },

  removeWithoutCopy: function(arr, item) {
    
  },

  append: function(arr, item) {
	  arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
  	return arr;
  },

  prepend: function(arr, item) {
  	var res = [];
  	res.push(item);
  	for(var i=0;i<arr.length;i++)
  	res.push(arr[i]);
  	return res;
  },

  curtail: function(arr) {
	   arr.shift();
     return arr;
  },

  concat: function(arr1, arr2) {
  	for(var i=0; i<arr2.length; i++)
  	arr1.push(arr2[i]);
  	return arr1;
  },

  insert: function(arr, item, index) {
  	var res = []; var count = 0;
  	for(var i=0; i<arr.length; i++){
  		if(i==index) res.push(item);
  		res.push(arr[i]);
  	}
  	return res;
  },

  count: function(arr, item) {
  	var count = 0;
  	for(var i=0; i<arr.length; i++){
  		if(arr[i]==item) count++;
  	}
  	return count;
  },

  duplicates: function(arr) {
    var obj= {};
    var lst = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i] in obj)
        obj[arr[i]]++;
      else obj[arr[i]]=1;
    }
    for(var key in obj) {if(obj[key]>1)lst.push(parseInt(key,10));}
    return lst;
  },

  square: function(arr) {
  	for(var i=0; i<arr.length; i++)
  	arr[i] = arr[i]*arr[i];
  	return arr;
  },

  findAllOccurrences: function(arr, target) {
    var res = [];
    for(var index=0; index<arr.length; index++)
    if(arr[index]==target) res.push(index);
    return res;
  }
};
