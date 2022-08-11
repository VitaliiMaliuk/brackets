module.exports = function check(str, bracketsConfig) {
  let brackets = new Map(bracketsConfig);
  let result = [];
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== brackets.get(result[result.length - 1])) {
      result.push(str[i]);
    } else {
      result.pop();
    }
  }
  if (result.length === 0) {
    return true;
  } else {
    return false;
  }
}
