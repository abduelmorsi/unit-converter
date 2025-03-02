/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthText = document.getElementById("length")
const volumeText = document.getElementById("volume")
const massText = document.getElementById("mass")
const convertNo = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    lengthText.innerText = `${convertNo.value} meters = ${(convertNo.value* 3.281).toFixed(3)} feet | ${convertNo.value} feet = ${(convertNo.value/3.281).toFixed(3)} meters`
    volumeText.innerText = `${convertNo.value} liters = ${(convertNo.value* 0.264).toFixed(3)} gallons | ${convertNo.value} gallons = ${(convertNo.value/0.264).toFixed(3)} liters`
    massText.innerText = `${convertNo.value} kilos = ${(convertNo.value* 2.204).toFixed(3)} pounds | ${convertNo.value} pounds = ${(convertNo.value/2.204).toFixed(3)} kilos`
})