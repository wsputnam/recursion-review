// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
   return ''+obj;
  }
  if (typeof obj === 'string') {
   return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
   var arr = [];
   obj.forEach(function(item, collection, index) {
   //if (index > 0) {
    //str = str.concat(',');
   //}
    arr.push(stringifyJSON(item));
   //str = str.concat(stringifyJSON(item));
     
   });
   var str = arr.join(',');
   return '[' + str + ']';
  }
  if (typeof obj === 'object') {
   var str = '{';
   for (var key in obj) {
    
   }
  }


};
