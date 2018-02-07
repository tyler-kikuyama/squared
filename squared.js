
function squared(array){
  return _.partition(array, number => Math.sqrt(number)%1===0);
}

console.log(squared([0,1,2,3,4,5,6,7,8,9]));