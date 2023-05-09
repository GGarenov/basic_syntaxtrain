function findTopIntegers(arr) {
  let topIntegers = [];
  let max = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      topIntegers.push(arr[i]);
      max = arr[i];
    }
  }

  return topIntegers.reverse().join(" ");
}