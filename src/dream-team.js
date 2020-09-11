module.exports = function createDreamTeam(elements) {
  if (!Array.isArray(elements)) return false;
  return elements.filter(el => typeof el === "string").map(person => person.trim()[0].toUpperCase()).sort().join('');
};
