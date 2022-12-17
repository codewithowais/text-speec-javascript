const textInputField = document.querySelector("#text-input");
const myForm = document.querySelector("#form");
const utterThis = new SpeechSynthesisUtterance();
const synth = window.speechSynthesis;
let ourText = "";

const checkBrowserCompatibility = () => {
  "speechSynthesis" in window
    ? console.log("Web Speech API supported!")
    : console.log("Web Speech API not supported :-(");
};

checkBrowserCompatibility();

myForm.onsubmit = (event) => {
  event.preventDefault();
  ourText = textInputField.value;
  utterThis.text = ourText;
  synth.speak(utterThis);
  // alert("Hello World");
  textInputField.value = "";
};
