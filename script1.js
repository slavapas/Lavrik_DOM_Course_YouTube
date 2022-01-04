let elem = document.querySelector("#text");
elem.addEventListener("click", function () {
  //   text.innerHTML = "HELLO";
  elem.innerHTML = "<h1>HELLO</h1>";
  elem.innerText = "<h1>Hi</h1>";
  console.log(elem.classList);
  elem.className = "i-am-a-new-class";
  console.log(elem.classList);
  elem.classList.add("new-class");
  console.log(elem.classList);
  elem.classList.remove("new-class");
  console.log(elem.classList);

  elem.style.fontSize = "30px";
});
