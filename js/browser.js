// function Entry(title, body) {
//   this.title = title;
//   this.body = body;
// };




$(document).ready(function() {
  $("form.journalEntryForm").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("input.titleInput").val();
    var inputtedBody = $("textarea.bodyInput").val();

    // var newEntry = new Entry(inputtedTitle, inputtedBody);

    $("ul#entryList").append("<span class='entry'><li>" +
                                '<div class="journalEntry">' +
                                  '<h1>' + inputtedTitle + '</h1>' +
                                  '<p>' + inputtedBody + '</p>' +
                                '</div>' +
                              "</li></span>"
    );
    
    $(".journalEntryForm")[0].reset();

  });
});
