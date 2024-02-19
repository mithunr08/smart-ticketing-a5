const allBtn = document.getElementsByClassName("add-btn");
let count = 8;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count - 1;
    // document.getElementById("seat-count").innerText = count;
    setInnerText("seat-count", count);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
