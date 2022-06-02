// Function with no parameters
var startMyDay = function () {
  return `Time for coffee and a shower!`;
};

console.log(startMyDay());

// Function with one parameter

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("oatmeal raisin"));

// Function with two parameters
var introduce = function (name, occupation) {
  return `Your name is ${name}, and your occupaton is ${occupation}.`;
};

console.log(introduce("zen", "meditation teacher"));
console.log(introduce("Monica", "Gardener"));

//Function with prompt and conditional
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Wow look at you staying hydrated. Keep it up!");
  } else if (numGlasses < 8) {
    console.log("Not bad but you need to drink some more water tomorrow.");
  }
};

hydrationFeedback();

