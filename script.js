function expand(idName) {
  document.querySelector("#" + idName).classList.add("reveal");
}

function dark(mode) {
  document.querySelector("body").classList.add(mode);
}

function light(mode) {
  document.querySelector("body").classList.remove(mode);
}
