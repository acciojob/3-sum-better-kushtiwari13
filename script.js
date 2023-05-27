function threeSum(arr, target) {
  arr.sort((a, b) => a - b); 
  let closestSum = Infinity;
	for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
 while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
  if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return closestSum; 
      }
    }
  }
	return closestSum;
}

let arr = [-1, 2, 1, -4];
let target = 1;
let ans = threeSum(arr, target);
console.log(ans);
module.exports = threeSum;