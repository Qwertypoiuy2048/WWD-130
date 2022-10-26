const liststart = [];
let runtime = -1;
newlist = liststart;
list2 = liststart;
function go() {
  runtime += 1;
  list2 = list2.concat('<li id="a', runtime, '">Item ', runtime, "</li>");
  newlist = newlist.concat(runtime);
  document.getElementById("newlist").innerText = newlist;
  document.getElementById("runtime").innerText = runtime;
  document.getElementById("listitems").innerHTML = list2;
}
