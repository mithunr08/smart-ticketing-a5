const allBtn = document.getElementsByClassName("add-button");
let count = 36;
let booking = 0;
let totalPrice = 0;
let grandPrice = 0;
for (const button of allBtn) {
  button.addEventListener("click", function (e) {
    count = count - 1;
    booking = booking + 1;

    // console.log(
    //   e.target.parentNode.parentNode.parentNode.parentNode.parentNode
    //     .childNodes[3].childNodes[9].childNodes[3].childNodes
    // );
    /* appends*/
    // array nite hobe

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
    /*btn bg color*/
    e.target.style.backgroundColor = "rgb(19, 209, 60)";
    // >4 btn

    /*Calculation*/
    const ticketPrice = document.getElementById("ticket-price").innerText;
    const convertedTicketPrice = parseInt(ticketPrice);
    totalPrice = totalPrice + convertedTicketPrice;
    const sum = totalPrice;
    setInnerText("total", sum);
    // grand-total

    // const grandTotal = document.getElementById("grand-total").innerText;
    // const convertedGrand = parseInt(grandTotal);

    grandPrice = grandPrice + convertedTicketPrice;
    const sum2 = grandPrice;
    setInnerText("grand-total", sum2);

    // const ticketPrice = document.getElementById("ticket-price").innerText;
    // const convertedTicketPrice = parseInt(ticketPrice);
    // const totalPrice = document.getElementById("total-price").innerText;
    // const convertedTotalPrice = parseInt(totalPrice);

    // const total = convertedTicketPrice + convertedTotalPrice;

    // console.log(total);

    // setInnerText("total", total);

    // document.getElementById("seat-count").innerText = count;
    setInnerText("seat-count", count);
    setInnerText("count-seat", booking);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
