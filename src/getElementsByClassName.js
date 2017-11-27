// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // create output array
  var output = [];
  // create function to check for className in DOM
  function searchNodes(element) {
    // if element is not undefined, check for className
    if(element !== undefined && element.classList !== undefined && 
      element.classList.contains(className)) {
      output.push(element);
    }
    
    if(element.hasChildNodes()) {
      for(var i = 0; i < element.childNodes.length; i++) {
        searchNodes(element.childNodes[i]);  
      }
      
    }
    
    
  }

  // call function on document.body
  // return output array
  searchNodes(document.body);
  return output;
};