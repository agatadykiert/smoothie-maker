document.addEventListener("DOMContentLoaded", function() {

var banana = document.querySelector(".banana");
var apple = document.querySelector(".apple");
var carrot = document.querySelector(".carrot");
var kiwi = document.querySelector(".kiwi");
var lemon = document.querySelector(".lemon");
var orange = document.querySelector(".orange");
var pear = document.querySelector(".pear");
var strawberry = document.querySelector(".strawberry");
var pineapple = document.querySelector(".pineapple");
var raspberry = document.querySelector(".raspberry");
var choice = document.querySelector(".choice");
var nutritions = document.querySelector(".nutritions");
var button = document.querySelector("button");
var cal = document.querySelector("#cal");
var fib = document.querySelector("#fib");
var pot = document.querySelector("#pot");
var mag = document.querySelector("#mag");
var sod = document.querySelector("#sod");
var calc = document.querySelector("#calc");
var vitA = document.querySelector("#vitA");
var vitC = document.querySelector("#vitC");

  banana.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = bananaObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(bananaObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(bananaObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(bananaObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(bananaObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(bananaObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(bananaObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(bananaObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(bananaObj.vitC);
  })
  apple.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = appleObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(appleObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(appleObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(appleObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(appleObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(appleObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(appleObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(appleObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(appleObj.vitC);
  })
  carrot.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = carrotObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(carrotObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(carrotObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(carrotObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(carrotObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(carrotObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(carrotObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(carrotObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(carrotObj.vitC);
  })
  kiwi.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = kiwiObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(kiwiObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(kiwiObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(kiwiObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(kiwiObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(kiwiObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(kiwiObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(kiwiObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(kiwiObj.vitC);
  })
  lemon.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = lemonObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(lemonObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(lemonObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(lemonObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(lemonObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(lemonObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(lemonObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(lemonObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(lemonObj.vitC);
  })
  orange.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = orangeObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(orangeObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(orangeObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(orangeObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(orangeObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(orangeObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(orangeObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(orangeObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(orangeObj.vitC);
  })
  pear.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = pearObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(pearObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(pearObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(pearObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(pearObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(pearObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(pearObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(pearObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(pearObj.vitC);
  })
  strawberry.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = strawberryObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(strawberryObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(strawberryObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(strawberryObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(strawberryObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(strawberryObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(strawberryObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(strawberryObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(strawberryObj.vitC);
  })
  pineapple.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = pineappleObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(pineappleObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(pineappleObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(pineappleObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(pineappleObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(pineappleObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(pineappleObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(pineappleObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(pineappleObj.vitC);
  })
  raspberry.addEventListener("click", function() {
    newLi = document.createElement("li");
    newLi.innerHTML = raspberryObj.name;
    choice.appendChild(newLi);
    cal.innerText = parseInt(cal.innerText) + parseInt(raspberryObj.calories);
    fib.innerText = parseInt(fib.innerText) + parseInt(raspberryObj.fiber);
    pot.innerText = parseInt(pot.innerText) + parseInt(raspberryObj.potassium);
    mag.innerText = parseInt(mag.innerText) + parseInt(raspberryObj.magnesium);
    sod.innerText = parseInt(sod.innerText) + parseInt(raspberryObj.sodium);
    calc.innerText = parseInt(calc.innerText) + parseInt(raspberryObj.calcium);
    vitA.innerText = parseInt(vitA.innerText) + parseInt(raspberryObj.vitA);
    vitC.innerText = parseInt(vitC.innerText) + parseInt(raspberryObj.vitC);
  })
  $('.blender').on('click', function() {
    var element = $(this);
    var newElement = element.clone(true);
    element.before(newElement);
    $(newElement).addClass('shaking');
    element.remove();
    nutritions.style.display = "block";
    button.style.display = "block";
  })
  $('button').on('click', function() {
    $('.choice').children('li').remove();
    nutritions.style.display = "none";
    button.style.display = "none";
    cal.innerText = 0;
    fib.innerText = 0;
    pot.innerText = 0;
    mag.innerText = 0;
    sod.innerText = 0;
    calc.innerText = 0;
    vitA.innerText = 0;
    vitC.innerText = 0;
  })
var Fruit = function(name, cal, fib, pot, mag, sod, calc, vitA, vitC){
  this.name = name;
  this.calories = cal;
  this.fiber = fib;
  this.potassium = pot;
  this.magnesium = mag;
  this.sodium = sod;
  this.calcium = calc;
  this.vitA = vitA;
  this.vitC = vitC;
}
var bananaObj = new Fruit("banana", 100, 3.12, 430, 32.4, 1.2, 6, 76.8, 0);
var appleObj = new Fruit("apple", 70, 4.08, 160, 7.5, 1.7, 9, 81, 6.9);
var carrotObj = new Fruit("carrot", 20, 1.40, 160, 6, 35, 16, 8353, 3);
var kiwiObj = new Fruit("kiwi", 43, 2.10, 218, 12.8, 2.25, 25.5, 65.2, 65);
var lemonObj = new Fruit("lemon", 28, 2.25, 138, 8, 2, 26, 22, 60);
var orangeObj = new Fruit("orange", 122, 5.52, 434.4, 2.4, 0, 120, 540, 128);
var pearObj = new Fruit("pear", 74, 4, 150, 9, 1.3, 11.7, 32.5, 5.6);
var strawberryObj = new Fruit("strawberry", 32, 0, 153, 13, 1, 16, 12, 59);
var pineappleObj = new Fruit("pineapple", 20, 0, 35, 4, 0, 4, 20, 15);
var raspberryObj = new Fruit("raspberry", 52, 0, 151, 22, 1, 25, 33, 26.2);
});
