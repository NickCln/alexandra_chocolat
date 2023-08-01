const btn = document.querySelector(".more__btn-catalog");
const content = document.querySelector(".content-hide");

btn.addEventListener("click", btnClick);

function btnClick() {
  content.classList.remove("content-hide");
  document.getElementById("del").remove();
  document.getElementsByClassName('content-mrg')[0].style.margin = "72px 0px 72px 0px";
}
