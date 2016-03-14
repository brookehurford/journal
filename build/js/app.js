(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./journal.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
