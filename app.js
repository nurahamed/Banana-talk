// hello welcome to my code have a nice day
let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");
let outputDiv = document.querySelector("#output");
let alert = document.querySelector("#denger");
let titleChange = document.querySelector("#title");


//// my testing code 

let serverURL;
const urlData= {
  url1:  "https://api.funtranslations.com/translate/minion.json",
  url2: "https://api.funtranslations.com/translate/yoda.json",
  url3: "https://api.funtranslations.com/translate/groot.json"
}

// url testing code end here

// language select by user code

let minionText = document.querySelector("#minion");
let yodaText = document.querySelector("#yoda");
let OgandaText = document.querySelector("#groot");
let langaugeTranslator = document.querySelector("#translateLanguage");


minionText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Minions Talk Language";
  outputDiv.innerText = null
  titleChange.innerText = "Minions"
  document.documentElement.style.setProperty('--box-color', 'yellow');
  serverURL = urlData.url1;
});

yodaText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Yoda Talk Language";
  outputDiv.innerText = null
  titleChange.innerText = "Yoda"
  document.documentElement.style.setProperty('--box-color', 'orange');
  serverURL = urlData.url2;
});

OgandaText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Groot Talk Language";
  outputDiv.innerText = null
  titleChange.innerText = "Groot"
  document.documentElement.style.setProperty('--box-color', 'cyan');
  serverURL = urlData.url3;
  
 
});

// api data fetching 
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

// checking the user button click if they reach 5 times of not and give them alert 

let count = 0;
function eventCk() {
  if ((outputDiv.innerText || textInput.value) != "") {
    count = count + 1;
    if (count === 5) {
      // console.log("You reach maximum limit come back one hour latter");
      alert.innerText="You reach maximum limit chose another language";
        setTimeout(() => {
          alert.innerText= null;
          }, 5000);

    }
  }
  console.log("count=", count);
}

btnTranslate.addEventListener("click", eventCk);

// checking the user. if they reach 5 times of not code end here