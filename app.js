// hello welcome to my code have a nice day
let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");
let outputDiv = document.querySelector("#output");
let alert = document.querySelector("#denger");
let titleChange = document.querySelector("#title");


//// my testing code 




const urlData= {
  url1: "url 1",
  url2: "url 2",
  url3: "url 3",
  url4: "Url 4"
}

let myurl = ""
console.log(myurl)
// url testing code end here
// language select by user code

let minionText = document.querySelector("#minion");
let yodaText = document.querySelector("#yoda");
let OgandaText = document.querySelector("#Oganda");
let langaugeTranslator = document.querySelector("#translateLanguage");


minionText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Minions Talk Language";
  titleChange.innerText = "Minions Talk"
  document.documentElement.style.setProperty('--box-color', 'yellow');
 
  // console.log(myurl)
  
  
});

OgandaText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Ogonda Under Development";
  titleChange.innerText = "Ogonda"
  document.documentElement.style.setProperty('--box-color', 'cyan');
 
  // console.log(myurl)
 
});

yodaText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Yoda Talk Under Development";
  titleChange.innerText = "Yoda"
  document.documentElement.style.setProperty('--box-color', 'orange');
 
 
  
});





// let serverURL = givemeUrl();
// console.log("I am updated by -->",serverURL)
/// my testing code end here 

//  main api data featching 

// let serverURL = "https://api.funtranslations.com/translate/yoda.json";
let serverURL = "https://api.funtranslations.com/translate/minion.json";

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