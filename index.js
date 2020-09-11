const attachEventToWarning = function () {
  const warning = document.getElementById("mybutton");
  warning.addEventListener("click", function () {
    alert("button clicked");
  });
};

const addClass = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("red-background"); //ipv 'toggle', 'add' maakt de kleur van blauw naar rood
};

const attachEventToChangeColorButton = function () {
  const makeRed = document.getElementById("changebackground");
  makeRed.addEventListener("click", function () {
    addClass();
  });
};

attachEventToWarning();
attachEventToChangeColorButton();
