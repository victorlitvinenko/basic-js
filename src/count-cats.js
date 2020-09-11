module.exports = function countCats(elements) {
  return elements.reduce((sum1, line) => sum1 + line.reduce((sum2, str) => sum2 + (str === '^^'), 0), 0);
};
