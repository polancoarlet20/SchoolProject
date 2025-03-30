function calculateGCD(a, b) {
  if (b === 0) return a;
  else return calculateGCD(b, a % b);
}

function findLargestNumber(nums) {
  let largest = Math.min(...nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}
