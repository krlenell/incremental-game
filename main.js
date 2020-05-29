var theButton = document.getElementById("the-button")
var number = document.getElementById("number")
var upgradeButton = document.getElementById("upgrade")
var numberValue = Number(number.textContent)

var upgradeNumber = 1;
var upgradeCost = 10

var clickBase = 1;
var clickModifier = 1;
var clickValue = clickBase * clickModifier;


var upgradeValue = "Upgrade " + upgradeNumber + " costs " + upgradeCost
upgradeButton.textContent = upgradeValue




function clicked() {
  numberValue += clickValue
  console.log(numberValue)
  updateNumberToValue()

}

function upgrade(){
  if(numberValue >= upgradeCost){
    clickModifier += Math.floor(Math.sqrt(upgradeNumber))
    numberValue = numberValue - upgradeCost
    console.log("Upgrade Number Value Change: ", numberValue)
    updateNumberToValue()
    updateClickValue()
    updateUpgrade()
  }
}

function updateNumberToValue() {
  number.textContent = numberValue
}

function updateClickValue(){
  clickValue = clickBase * clickModifier
}

function updateUpgrade(){
  upgradeNumber++
  upgradeCost += 10
  upgradeValue = "Upgrade " + upgradeNumber + " costs " + upgradeCost
  upgradeButton.textContent = upgradeValue
}


theButton.addEventListener('click', clicked)
upgradeButton.addEventListener('click', upgrade)
