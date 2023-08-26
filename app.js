let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");

let outputDiv = document.querySelector("#output");



// let serverURL = "https://api.funtranslations.com/translate/minion.json";
let serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Some went wrong with server please truy after some time ");
}


function clickHandler() {
  var inputText = textInput.value;
  
  fetch(getTranslationURL(inputText))
  .then((response) => response.json())
  .then((json) => {
    var translateText = json.contents.translated;
    outputDiv.innerText = translateText;
  })
  .catch(errorHandler);
  
}
  
btnTranslate.addEventListener("click", clickHandler);

  // checking the user if they reach 5 times of not

  
  let count=0;
  function eventCk(){
    if( (outputDiv.innerText || textInput.value) != "" ){
      count=count+1;
      if(count===5 ){
        console.log("You reach maximum limit come back one hour latter")
      }
    }
    console.log("count=",count)
  }
  
  btnTranslate.addEventListener("click",eventCk);