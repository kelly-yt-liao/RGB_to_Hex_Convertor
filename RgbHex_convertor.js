
// 1. Parameters setting
const form = document.forms[0]

const red = document.querySelector("#inputRed")
const green = document.querySelector("#inputGreen")
const black = document.querySelector("#inputBlack")
const dataPanelHex = document.querySelector("#HexInputer")

var rgbList = []

// 2. Functions implementations
function componentToHex(num) {
  var hex = num.toString(16)
  return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase()
}

function rgbToHex(list) {
  var hexStr = "#"
  list.forEach(function (item, index) {
    hexStr = hexStr + componentToHex(Number(item))
  })
  return hexStr
}

function displayCanvas(str) {
  var c = document.getElementById("finalCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = str;
  ctx.fillRect(0, 0, 180, 180);
}

function displayHex(str) {
  let htmlContent = ''

  htmlContent += `
      <div class="row-md-6">
        <input type="text" class="form-control" id="HexNumber" value=${str}>
      </div>

      <div class="row-md-6">
        <canvas id="finalCanvas">canvas tag</canvas>
        
      </div>
  `
  dataPanelHex.innerHTML = htmlContent
  displayCanvas(str)
}


// 3. Driven code here!!!

form.addEventListener("submit", function (e) {
  // Prevent for the exceptional conditions:
  // Valid only for integer numbers from 0 to 255.
  e.preventDefault()

  // Double check if 3 inputs are integer numbers.
  console.log("$$$$$$$$$$$$$$ red.value is : " + isNaN(red.value))
  if (isNaN(red.value) === false && isNaN(green.value) === false && isNaN(black.value) === false) {

    rgbList.push(red.value)
    rgbList.push(green.value)
    rgbList.push(black.value)
  } else {
    alert("Please input the valid integer numbers (0~255) to do the conversion!");
  }

  console.log("$$$$$$$$$$$$$$ RGB list is : " + rgbList)

  const Hex = rgbToHex(rgbList)
  console.log("$$$$$$$$$$$$$$ Hex number is : " + Hex)
  displayHex(Hex)

  // Clear data
  red.value = ""
  green.value = ""
  black.value = ""
  rgbList = []

})
