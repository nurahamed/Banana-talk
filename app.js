var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// console.log(txtInput);



function clickHandler() {
//   console.log("Clicked");
//   console.log("Input value is: ",  txtInput.value);
  outputDiv.innerHTML = txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);
