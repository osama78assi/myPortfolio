import getRandCapitalChar from "./getRandCapitalChar";
import getRandSmallChar from "./getRandSmallChar";
import getRandInt from "./getRandInt";

// Get Random Id
/**
 *
 * the length will be divided by 3
 * @param {Number} len
 * @returns {String}
 */
function getRandId(len = 15) {
  let id = "";
  const dividedLen = Math.ceil(len);
  for (let i = 0; i < dividedLen; i++) {
    const choice = getRandInt(0, 2);
    if (choice == 1) id += getRandSmallChar();
    else if (choice == 2) id += getRandCapitalChar();
    else if (choice == 3) id += getRandInt();
  }
  id += "-";
  for (let i = 0; i < dividedLen; i++) {
    const choice = getRandInt(0, 2);
    if (choice == 1) id += getRandSmallChar();
    else if (choice == 2) id += getRandCapitalChar();
    else if (choice == 3) id += getRandInt();
  }
  id += "-";
  for (let i = 0; i < dividedLen; i++) {
    const choice = getRandInt(0, 2);
    if (choice == 1) id += getRandSmallChar();
    else if (choice == 2) id += getRandCapitalChar();
    else if (choice == 3) id += getRandInt();
  }
  return id;
}

export default getRandId;
