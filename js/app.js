document.addEventListener("DOMContentLoaded", function() {

var banana = document.querySelector(".banana");
var apple = document.querySelector(".apple");
var carrot = document.querySelector(".carrot");
var kiwi = document.querySelector(".kiwi");
var lemon = document.querySelector(".lemon");
var orange = document.querySelector(".orange");
var choice = document.querySelector(".choice");
var nutritions = document.querySelector(".nutritions");
var button = document.querySelector("button");
var blender = document.querySelector(".blender");
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
  button.addEventListener("click", function() {
    var blender = document.querySelector(".blender");
    blender.classList.add("shaking");
    nutritions.style.display = "block";
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

});
