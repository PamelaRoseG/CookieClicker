// DOM (Document Object Model): interface that represents a full
// heiarchy of HTML.
// let headerTitles = document.getElementsByClassName("title");

// for (let i = 0; i < headerTitles.length; i++) {
//   headerTitles[i].innerText = "This is title number " + i;
// }

// let smallerHeader = document.createElement("h2");
// smallerHeader.setAttribute("id", "header2");
// smallerHeader.innerText = "Get another header";

// smallerHeader.style.backgroundColor = "red";

// let theDiv = document.getElementById("divliness");

// theDiv.append(smallerHeader);

// *** EVENTS ***

let incrementButton = document.getElementById("cookie-btn");
let buyShovel = document.getElementById("btn-shovel");
let buyBucket = document.getElementById("btn-bucket");
let buyTruck = document.getElementById("btn-truck");
let incrementNumber = document.getElementById("dollarAmount");

buyShovel.addEventListener("click", function () {
  handleClick("shovelClick");
});
buyBucket.addEventListener("click", function () {
  handleClick("bucketClick");
});
buyTruck.addEventListener("click", function () {
  handleClick("truckClick");
});
incrementButton.addEventListener("click", function () {
  handleClick("addNumber");
});

// incrementButton.addEventListener("mousedown", function () {
//   shrinkCookie();
// });

// incrementButton.addEventListener("mouseup", function () {
//   normalizeCookie();
// });

// function shrinkCookie(action) {
//   if (action === "mousedown") {}
// }

let count = 0;
let modifier = 0;

function handleClick(action) {
  if (action === "addNumber") {
    count += 1 + modifier;
    incrementNumber.innerText = "$" + count;
  }

  if (action === "shovelClick") {
    if (count >= 10) {
      count -= 10;
      modifier += 1;
      buyShovel.disabled = true;
      incrementNumber.innerText = "$" + count;
    }
  }
  if (action === "bucketClick") {
    if (count >= 50) {
      count -= 50;
      modifier += 2;
      buyBucket.disabled = true;
      incrementNumber.innerText = "$" + count;
    }
  }

  if (action === "truckClick") {
    if (modifier === 3) {
      if (count >= 100) {
        count -= 100;
        modifier += 50;
        buyTruck.disabled = true;
        incrementNumber.innerText = "$" + count;
      }
    }
  }
}

// incrementNumber.setAttribute("id", "dollarAmount");
// incrementNumber.innerText = "$0";
// //Parent              Child
// document.body.append(incrementNumber);
// buttonNumber.classList.add("buttonClick");

// Random sources of code I found on the internet to implement to make
// some ideas

// var audio = document.getElementById("sweet-music");
// audio.volume = 0.05;
