let count = 0;

document.querySelector(".decrement").onclick = function () {
  count -= 1;
  document.getElementById("count").innerHTML = count;
};

document.querySelector(".reset").onclick = function () {
  count = 0;
  document.getElementById("count").innerHTML = count;
};

document.querySelector(".increment").onclick = function () {
  count += 1;
  document.getElementById("count").innerHTML = count;
};
