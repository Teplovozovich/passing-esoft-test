function isValidParentheses(s) {
  const stack = [];
  const matchingBrackets = { ")": "(", "]": "[", "}": "{" };

  for (const char of s) {
    if (char in matchingBrackets) {
      if (!stack.length || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    } else if (Object.values(matchingBrackets).includes(char)) {
      stack.push(char);
    }
  }

  return !stack.length;
}

// const string1 = "()[({()})]{(((({[[{(())}]]}))))}";
// const string2 = "([){{)}}]";

// console.log(isValidParentheses(string1));
// console.log(isValidParentheses(string2));
