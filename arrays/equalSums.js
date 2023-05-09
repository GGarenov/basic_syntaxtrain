function equalSums(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((a, b) => a + b, 0); // initialize with the sum of the whole array

  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i]; // update right sum
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i]; // update left sum
  }

  return "no"; // no such index found
}