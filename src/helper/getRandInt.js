// Function To Get Random Number
function getRandInt(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default getRandInt;
