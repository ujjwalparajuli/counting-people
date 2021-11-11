// Intialize the count as 0
let countEnter =0;
let countLeft = 0;
let countInside= 0;

// Listen for clicks on the increment button
function increment(){
  countEnter= countEnter+1;
  document.getElementById("count-increment").innerText= countEnter;
  console.log(countEnter);

  //Calculate the totalNumber of People Inside.
  document.getElementById("count-total").innerText= countEnter- countLeft;

}

// Listen for clicks on the decrement button
function decrement(){
  countLeft= countLeft+1;
  document.getElementById("count-decrement").innerText= countLeft;
  console.log(countLeft);

  //Calculate the totalNumber of People Inside.
  document.getElementById("count-total").innerText= countEnter- countLeft;

}

function reset(){
    document.getElementById("count-increment").innerText= 0;
    countEnter =0
    document.getElementById("count-decrement").innerText= 0;
    countLeft = 0;
    document.getElementById("count-total").innerText=0;
    countInside= 0;
    console.log("Reset pressed");
}
