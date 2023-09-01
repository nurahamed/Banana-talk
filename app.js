// hello welcome to my code have a nice day
let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");
let outputDiv = document.querySelector("#output");
let dengerMsg = document.querySelector("#denger");
let titleChange = document.querySelector("#title");

//// my testing code
let count = 0;
let serverURL;
const urlData = {
  url1: "https://api.funtranslations.com/translate/minion.json",
  url2: "https://api.funtranslations.com/translate/yoda.json",
  url3: "https://api.funtranslations.com/translate/groot.json",
};

// language select by user code

let minionText = document.querySelector("#minion");
let yodaText = document.querySelector("#yoda");
let OgandaText = document.querySelector("#groot");
let langaugeTranslator = document.querySelector("#translateLanguage");

minionText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Minions Talk Language";
  outputDiv.innerText = null;
  titleChange.innerText = "Minions";
  document.documentElement.style.setProperty("--box-color", "yellow");
  serverURL = urlData.url1;
});

yodaText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Yoda Talk Language";
  outputDiv.innerText = null;
  titleChange.innerText = "Yoda";
  document.documentElement.style.setProperty("--box-color", "orange");
  serverURL = urlData.url2;
});

OgandaText.addEventListener("click", () => {
  langaugeTranslator.innerText = "";
  langaugeTranslator.innerText = "Groot Talk Language";
  outputDiv.innerText = null;
  titleChange.innerText = "Groot";
  document.documentElement.style.setProperty("--box-color", "cyan");
  serverURL = urlData.url3;
});

// api data fetching
function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  dengerMsg.innerText = "Some went wrong with server please try after some time";
  setTimeout(() => {
    dengerMsg.innerText = null;
  }, 20000);
  // alert("Some went wrong with server please try after some time ");
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
// translate button error handeler

const translateHandel = () => {
  if ((textInput.value != "" && count >= 0 )|| outputDiv.innerText != "") {
    // console.log(textInput.value);
    dengerMsg.innerText = "Translation Success";
    setTimeout(() => {
      dengerMsg.innerText = null;
    }, 6000);
  } else if(textInput.value != "") {
    dengerMsg.innerText = "Choose a Language & Enter Your Text";
    setTimeout(() => {
      dengerMsg.innerText = null;
    }, 6000);
  }
};
btnTranslate.addEventListener("click", translateHandel);

// translate error handeler end here

//handle copy
// let copyClick = document.querySelector("#copyText")
// var text = document.getElementById("outputDiv");
// const handleCopy = () =>{
//     if(outputDiv.innerText!= ""){
//         console.log("I am copy");
//         console.log(text.value)
//         text.select();
//         navigator.clipboard.writeText(text.value);
//         dengerMsg.innerText="Your text copied";
//         setTimeout(() => {
//           dengerMsg.innerText= null;
//         }, 5000);
//      }else{
//         dengerMsg.innerText= "Translate First";
//         setTimeout(() => {
//           dengerMsg.innerText= null;
//         }, 5000);
//      }

// }

// copyClick.addEventListener('click', handleCopy);
//handle copy end here

// checking the user button click if they reach 5 times of not and give them alert


function eventCk() {
  if ((outputDiv.innerText || textInput.value) != "") {
    count = count + 1;
    if (count === 5) {
      // console.log("You reach maximum limit come back one hour latter");
      dengerMsg.innerText = "You reach maximum limit chose another language";
      setTimeout(() => {
        dengerMsg.innerText = null;
      }, 5000);
    }
  }
  console.log("count=", count);
}

btnTranslate.addEventListener("click", eventCk);

// checking the user. if they reach 5 times of not code end here
