var JournalEntry = require('./journal.js').JournalEntry;
var prompt = require('prompt');

prompt.get('entry', function(err, result){
  var body = result.entry;
  var newEntry = new JournalEntry("", body);
  console.log(newEntry.body);
  var count = newEntry.wordCount();
  console.log(count);


  var anotherEntry = new JournalEntry("this is a title", "this is a body");
  console.log(anotherEntry.body);
  console.log(anotherEntry.wordCount());
});
