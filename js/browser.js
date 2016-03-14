var JournalEntry = require('./journal.js').JournalEntry;

$(document).ready(function() {
  $("form.journalEntryForm").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("input.titleInput").val();
    var inputtedBody = $("textarea.bodyInput").val();

    var newEntry = new JournalEntry(inputtedTitle, inputtedBody);

    $("ul#entryList").append("<span class='entry'><li>" +
                                '<div class="journalEntry">' +
                                  '<h1>' + inputtedTitle + '</h1>' +
                                  '<p>' + inputtedBody + '</p>' +
                                  '<h3>Word Count: ' + newEntry.wordCount() + '</h3>' +
                                '</div>' +
                              "</li></span>"
    );

    $(".journalEntryForm")[0].reset();

  });
});
