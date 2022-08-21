const setAlert = () => {
  if (checkThePin()) {
    document.getElementById("error").style.display = "none";
    document.getElementById("ok").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("ok").style.display = "none";
  }
};
const checkThePin = () => {
  return pinInput.value == generatedPin.innerText ? true : false;
};
const hideAlert = () => {
  document.getElementById("error").style.display = "none";
  document.getElementById("ok").style.display = "none";
};
const clearInput = (e) => {
  pinInput.value = "";
  hideAlert();
  e?.stopPropagation();
};

/* ------------------------- generate a new pin ------------------------ */
let generator = document.getElementById("generator");
let generatedPin = document.getElementById("generated-pin");
generator.addEventListener(
  "click",
  (fun = () => {
    generatedPin.style.scale = 1;
    clearInput();
    let randomNumber = Math.round(Math.random() * 10000);
    let x = "2108";
    if (randomNumber.toString().length === 4) {
      isNaN(parseFloat(randomNumber)) && fun();
      generatedPin.innerText = parseFloat(randomNumber);
      setTimeout(() => {
        generatedPin.style.scale = 0;
      }, 1500);
    }
  })
);

/* -------------------------- getting the pin ------------------------- */
let buttons = document.getElementById("buttons");
let pinInput = document.getElementById("pin-input");
let clearButton = document.getElementById("clear-button");
let deleteButton = document.getElementById("delete-button");
buttons.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    /* ---- checking whether parent is delegating for buttons or others ---- */
    pinInput.value = pinInput.value + e.target.innerText;
    if (pinInput.value.length >= 4) setAlert();
    else {
      hideAlert();
    }
  }
  e.stopPropagation();
});
clearButton.addEventListener("click", (e) => clearInput(e));
deleteButton.addEventListener("click", (e) => {
  let string = pinInput.value.toString();
  pinInput.value = string.slice(0, -1);
  hideAlert();
  e.stopPropagation();
});
/* -------------------------- matching the pin ------------------------- */
