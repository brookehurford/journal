function journalEntry (title, body) {
  this.title = title;
  this.body = body;
};

journalEntry.prototype.wordCount = function() {
  var wordTotal = 1;

  for (var i = 0; i < this.body.length; i++) {
    console.log(this.body[i]);
    if (this.body[i] === " ") {
      wordTotal += 1;
    }
  }
  return wordTotal;
};

$(document).ready(function() {
  $("form.journalEntryForm").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("input.titleInput").val();
    var inputtedBody = $("textarea.bodyInput").val();

    var newEntry = new journalEntry(inputtedTitle, inputtedBody);

    $("ul#entryList").append("<span class='entry'><li>" +
                                '<div class="journalEntry">' +
                                  '<h1>' + inputtedTitle + '</h1>' +
                                  '<p>' + inputtedBody + '</p>' +
                                  '<h3>Word Count:' + newEntry.wordCount() + '</h3>' +
                                '</div>' +
                              "</li></span>"
    );

    $(".journalEntryForm")[0].reset();

  });
});
