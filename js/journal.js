function JournalEntry (title, body) {
  this.title = title;
  this.body = body;
};

JournalEntry.prototype.wordCount = function() {
  var wordTotal = 1;

  for (var i = 0; i < this.body.length; i++) {
    if (this.body[i] === " ") {
      wordTotal += 1;
    }
  }
  return wordTotal;
};

exports.JournalEntry = JournalEntry;
