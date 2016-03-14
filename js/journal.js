function journalEntry (title, body) {
  this.title = title;
  this.body = body;
};

journalEntry.prototype.wordCount = function() {
  var wordTotal = 0;

  for (var i=0; i < journalEntry.length; i++) {
    if (journalEntry[i] === " ") {
      wordTotal + 1;
    }
    else {
      return wordTotal;
    }
  }
}
