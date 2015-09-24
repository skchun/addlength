/**
 * Created by Sam on 9/24/2015.
 */
var testArray = ["apple", "pear"];
var testArray2 = ["you", "can", "win"];
function addLength(array){
  return _.map(array, function(num){return num + " " + num.length});
}

console.log(addLength(testArray));
console.log(addLength(testArray2));