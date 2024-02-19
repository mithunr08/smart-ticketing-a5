const allBtn = document.getElementsByClassName("add-button");
let count = 8;
let booking = 0;
for (const button of allBtn) {
  button.addEventListener("click", function (e) {
    count = count - 1;
    booking = booking + 1;

    // console.log(
    //   e.target.parentNode.parentNode.parentNode.parentNode.parentNode
    //     .childNodes[11].childNodes[7].childNodes[7].childNodes[5].innerText
    // );
    /* appends*/
    const ulContainer = document.getElementById("selected-append-container");
    const li = document.createElement("li");
    li.innerText = e.target.innerText;
    ulContainer.appendChild(li);

    const ulClass = document.getElementById("selected-append-container");
    const p = document.createElement("p");
    p.innerText =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[11].childNodes[7].childNodes[7].childNodes[3].innerText;
    ulClass.appendChild(p);

    const ulPrice = document.getElementById("selected-append-container");
    const tk = document.createElement("tk");
    tk.innerText =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[11].childNodes[7].childNodes[7].childNodes[5].innerText;
    ulPrice.appendChild(tk);
    /*Calculation*/
    // const totalCost = document.getElementById("total-cost");
    // const convertedTotal = parseInt("totalCost");
    // const total = convertedTotal + parseInt(tk);
    // return totalCost;

    // document.getElementById("seat-count").innerText = count;
    setInnerText("seat-count", count);
    setInnerText("count-seat", booking);
  });
}

// let booking = 0;
// for (const button of allBtn) {
//   button.addEventListener("click", function (e) {
//     booking = booking + 1;

//     console.log(e.target.parentNode.childNodes);

//     const seatNumber =
//       e.target.parentNode.childNodes[3].childNodes[0].innerText;

//     const selectedContainer = document.getElementById(
//       "selected-append-container"
//     );

//     const li = document.createElement("li");

//     const p = document.createElement("p");
//     p.innerText = seatNumber;

//     li.appendChild(p);

//     selectedContainer.appendChild(li);
//   });
// }

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
