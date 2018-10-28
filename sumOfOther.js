function sumOfOther(arr){
  let result = [];
  let sum = arr.reduce(function(sum, current) {
  return sum + current;
	});
  for (let i = 0; i < arr.length; i++){
     result.push(sum - arr[i]);
     }
  return result;
}