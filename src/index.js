module.exports = function check(str, bracketsConfig) {
  const openingBrackets = bracketsConfig.map(([opening]) => opening);
  const closingBrackets = bracketsConfig.map(([, closing]) => closing);

  // your solution
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    const correspondingOpeningBracketIdx = openingBrackets.indexOf(bracket);
    const correspondingClosingBracketIdx = closingBrackets.indexOf(bracket);
    const isOpeningBracket = correspondingOpeningBracketIdx !== -1;
    const isClosingBracket = correspondingClosingBracketIdx !== -1;

    if (correspondingOpeningBracketIdx === correspondingClosingBracketIdx) {
      if (stack.length && stack[stack.length - 1] === bracket) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (isOpeningBracket) {
      stack.push(bracket);
    } else if (isClosingBracket) {
      if (openingBrackets[correspondingClosingBracketIdx] !== stack.pop()) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
};
