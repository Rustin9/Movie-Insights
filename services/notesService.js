const notes = require("../data/gold/creator_notes.json");

function getNotes(title) {
  return notes[title] || [];
}

module.exports = { getNotes };