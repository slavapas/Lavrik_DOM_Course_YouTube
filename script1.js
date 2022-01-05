// let elem = document.querySelector("#text");
// elem.addEventListener("click", function () {
//   //   text.innerHTML = "HELLO";
//   elem.innerHTML = "<h1>HELLO</h1>";
//   elem.innerText = "<h1>Hi</h1>";
//   console.log(elem.classList);
//   elem.className = "i-am-a-new-class";
//   console.log(elem.classList);
//   elem.classList.add("new-class");
//   console.log(elem.classList);
//   elem.classList.remove("new-class");
//   console.log(elem.classList);

//   elem.style.fontSize = "30px";
// });

document.addEventListener("DOMContentLoaded", function () {
  let btnPrev = document.querySelector("#gallery .buttons .prev");
  // console.log(btnPrev);
  let btnNext = document.querySelector("#gallery .buttons .next");
  // console.log(btnNext);

  let images = document.querySelectorAll(".photos img");
  // console.log(images);

  i = 0;

  btnPrev.onclick = () => {
    console.log(i);
    images[i].style.display = "none";
    i--;

    if (i < 0) {
      i = images.length - 1;
    }
    images[i].style.display = "block";
  };

  btnNext.onclick = () => {
    console.log(i);
    images[i].style.display = "none";
    i++;

    if (i >= images.length) {
      i = 0;
    }
    images[i].style.display = "block";
  };
});
