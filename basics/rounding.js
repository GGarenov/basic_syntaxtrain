function roundNumberToPrecision(number, precision) {
  // Reduce the precision to 15 if it's greater than 15
  precision = Math.min(precision, 15);

  // Round the number to the specified precision
  let roundedNumber = Number(number.toFixed(precision));

  // Remove trailing zeros and the decimal point if the number is an integer
  let formattedNumber = parseFloat(roundedNumber);

  // Print the formatted number to the console
  console.log(formattedNumber);
}