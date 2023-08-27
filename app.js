// hello welcome to my code have a nice day
let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");
let outputDiv = document.querySelector("#output");
let alert = document.querySelector("#denger");


//// my testing code 

// language select by user code
// let minionText = document.querySelector("#minion");
let minionText = document.querySelector("#minion");
let yodaText = document.querySelector("#yoda");
let OgandaText = document.querySelector("#Oganda");
let langaugeTranslator = document.querySelector("#translateLanguage");


minionText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Minions Talk";
  document.documentElement.style.setProperty('--box-color', 'pink');
});

OgandaText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Ogonda";
  document.documentElement.style.setProperty('--box-color', 'red');
});

yodaText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Yoda  Talk";
  document.documentElement.style.setProperty('--box-color', 'yellow');
});

// language select by user code end here

let myurl = ""
minionText.addEventListener('click', () =>{
 myurl = updateUel()
 console.log(myurl);

});

function updateUel(){
 return "hello i am update url";
}


/// my testing code end here 

//  main api data featching 

let serverURL = "https://api.funtranslations.com/translate/minion.json";
// let serverURL = "https://api.funtranslations.com/translate/yoda.json";

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
//  main api data featching  end here 

// checking the user if they reach 5 times of not and give them alert 

let count = 0;
function eventCk() {
  if ((outputDiv.innerText || textInput.value) != "") {
    count = count + 1;
    if (count === 5) {
      console.log("You reach maximum limit come back one hour latter");
      alert.innerText="You reach maximum limit chose another language";
        setTimeout(() => {
          alert.innerText="";
          }, 3000);

    }
  }
  console.log("count=", count);
}

btnTranslate.addEventListener("click", eventCk);

// checking the user if they reach 5 times of not code end here