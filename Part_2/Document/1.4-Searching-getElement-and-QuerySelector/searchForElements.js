// Here’s the document with the table and form.

// How to find?

// The table with id="age-table".
document.getElementById("age-table");
// All label elements inside that table (there should be 3 of them).
document.getElementById("age-table").querySelectorAll("label");
// The first td in that table (with the word “Age”).
document.getElementById("age-table").querySelector("td");
// The form with the name search.
document.querySelector("form[name=search]");
// The first input in that form.
document.querySelector("form[name=search]").querySelector("input");
// The last input in that form.
document.querySelector("form[name=search]").querySelectorAll("input")[document.querySelector("form[name=search]").querySelectorAll("input").length -1];
// Open the page table.html in a separate window and make use of browser tools for that.
