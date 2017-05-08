document.addEventListener("DOMContentLoaded", function() {

var banana = document.querySelector(".banana");
var apple = document.querySelector(".apple");
var carrot = document.querySelector(".carrot");
var kiwi = document.querySelector(".kiwi");
var lemon = document.querySelector(".lemon");
var orange = document.querySelector(".orange");
var choice = document.querySelector(".choice");
var nutritions = document.querySelector(".nutritions");

  banana.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = bananaObj.name;
    choice.appendChild(newLi);
    for(var i =0; i < bananaObj.values.length; i ++) {
    newLi = document.createElement("li");
    newLi.innerHTML = bananaObj.values[i];
    nutritions.appendChild(newLi);
  }
  })
  apple.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = appleObj.name;
    choice.appendChild(newLi);
    for(var i =0; i < appleObj.values.length; i ++) {
    newLi = document.createElement("li");
    newLi.innerHTML = appleObj.values[i];
    nutritions.appendChild(newLi);
  }
  })
  carrot.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = carrotObj.name;
    choice.appendChild(newLi);
    for(var i =0; i < carrotObj.values.length; i ++) {
    newLi = document.createElement("li");
    newLi.innerHTML = carrotObj.values[i];
    nutritions.appendChild(newLi);
  }
  })
  kiwi.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = kiwiObj.name;
    choice.appendChild(newLi);
    for(var i =0; i < kiwiObj.values.length; i ++) {
    newLi = document.createElement("li");
    newLi.innerHTML = kiwiObj.values[i];
    nutritions.appendChild(newLi);
  }
  })
  lemon.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = lemonObj.name;
    choice.appendChild(newLi);
    for(var i =0; i < lemonObj.values.length; i ++) {
    newLi = document.createElement("li");
    newLi.innerHTML = lemonObj.values[i];
    nutritions.appendChild(newLi);
  }
  })
  orange.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = orangeObj.name;
    choice.appendChild(newLi);
    for(var i =0; i < orangeObj.values.length; i ++) {
    newLi = document.createElement("li");
    newLi.innerHTML = orangeObj.values[i];
    nutritions.appendChild(newLi);
  }
  })
var bananaObj = {
    name: "banana",
    values: [
      'calories: 100 ',
      'fieber: 3.12 g',
      'potassium: 430 mg',
      'magnesium: 32.4 mg',
      'vit B6: 0.44 mg'
    ]
}
var appleObj = {
    name: "apple",
    values: [
      'calories: 97 ',
      'fieber: 4.08 g',
      'sodiumium: 1.7 mg'
    ]
}
var carrotObj = {
    name: "carrot",
    values: [
      'calories: 30 ',
      'fieber: 1.40 g',
      'potassium: 160 mg',
      'vit A: 8353 I.U.',
      'vit C: 3 mg'
    ]
}
var kiwiObj = {
    name: "kiwi",
    values: [
      'calories: 43 ',
      'fieber: 2.10 g',
      'potassium: 218 mg',
      'vit E: 1 mg',
      'vit C: 65 mg'
    ]
}
var lemonObj = {
    name: "lemon",
    values: [
      'calories: 38 ',
      'fieber: 2.25 g',
      'calcium: 107.2 mg',
      'vit C: 103.2 mg'
    ]
}
var orangeObj = {
    name: "orange",
    values: [
      'calories: 122 ',
      'fieber: 5.52 g',
      'calcium: 161 mg',
      'vit C: 163.3 mg'
    ]
}
});
