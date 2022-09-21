function change() {
  let pagetext = "This is a Div";
  let newtext = "Hello!";
  if (document.getElementById("div").innerHTML === "Hello!") {
    document.getElementById("div").innerHTML = pagetext;
  } else {
    document.getElementById("div").innerHTML = newtext;
  }
}
