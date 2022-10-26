let word = "new word";
let number = 2;
function newassign() {
  number += 1;
  document.getElementById("assignments").innerHTML +=
    '<li id="a' + number + '" >' + word + "</li>";
}
