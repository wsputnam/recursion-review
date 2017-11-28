// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

// can call parseJSON recursive, so json could be substring
var parseJSON = function(json) {
  // your code goes here
  if(json[0] === '{') {
    return makeObject(removeSurroundingChars(json));
  }
  if(json[0] === '[') {
    return makeArray(removeSurroundingChars(json);
  }
  if(json.contains(':') !== -1) {
    return makePair(json);
  }
  return makeValue(json);
};

// remove surrounding quotes, braces, brackets
var removeSurroundingChars(str) {
  return str.substring(1,str.length-1);
}

var makeObject = function(str) {
  var obj = {};  
   // turning first word up til colon into key, then next word into value (then recursively converting value), then etc., until }
  var arr = str.split(',');
  arr.forEach(function(pair) {
    var pairArr = makePair(pair);
    obj[pairArr[0]] = pairArr[1];
  });

  return obj;
};

var makeArray = function(str) {
  var arr = [];

  return arr;
};

// when substring has :, call

var makeString = function(str) {
  


};

// split key and value and return an array of size 2
var makePair = function(str) {
  var arr = str.split(':');
  var result = [];
  result.push(arr[0]);
  result.push(parseJSON(arr[1]));
  return result;
};

var makeValue = function(str) {
  if (str === 'null') {
    return null;
  }
  if (str === 'true') {
    return true;
  }
  if (str === 'false') {
    return false;
  }
  
  var arr;

  // test if json is a string with opening single quotes
  arr = str.match('^\'\".*\"\'$');
  if (arr[0] !== null) {
    // delete quotes and keep the rest as a string
    return removeSurroundingChars(arr[0]);
  }
  // test if json is a string with opening double quotes
  arr = str.match('^\"\'.*\'\"$');
  if (arr[0] !== null) {
    // delete quotes and keep the rest as a string
    return removeSurroundingChars(arr[0]);
  }

  // test if json string is a number
  //  this won't account for unbalanced quotes
  arr = str.match('^-{0,1}\.{0,1}\d+[eE]{0,1}-{0,1}\d+$'); // testing for any possible number value including exponents  
  if(arr[0] !== null) {
    return makeNumber(arr[0]);
  }
}