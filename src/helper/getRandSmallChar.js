// Function To Get Random Capital Case Letter
function getRandSmallChar() {
  const min = 65;
  const max = 90;
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
}

export default getRandSmallChar;
