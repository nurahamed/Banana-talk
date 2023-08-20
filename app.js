var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

var outputDiv = document.querySelector("#output");


function clickHandler() {
  console.log("Clicked");
  console.log("Input value is: ",  txtInput.value);
  outputDiv.innerHTML = txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);
