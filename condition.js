var mou = document.querySelector("#sel");
mou.addEventListener("mouseover", function () {
  mou.classList.add("cStyle");
});

mou.addEventListener("mouseout", function () {
  mou.classList.remove("cStyle");
});
