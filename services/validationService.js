// services/validationService.js
function validate(output, movie) {
  if (!output.hook) throw new Error("Missing hook");

  if (output.trivia.length !== 5) {
    throw new Error("Trivia must be 5 items");
  }

  output.trivia.forEach(item => {
    if (!item.source) throw new Error("Missing citation");
  });

  return true;
}

module.exports = { validate };