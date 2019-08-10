(function () {

  //init
  const form = document.forms[0]
  const rLabel = document.querySelector('#rLabel')
  const gLabel = document.querySelector('#gLabel')
  const bLabel = document.querySelector('#bLabel')
  const button = document.querySelector('button')

  //function
  function inputError(inputValue) {
    if (inputValue < 0 || inputValue > 255 || Number.isNaN(inputValue) || !Number.isInteger(inputValue)) {
      return true
    }
  }

  function toHex(inputValue) {
    if (inputError(inputValue)) {
      let feedbackDiv = document.createElement("div")
      feedbackDiv.innerHTML = 'oops! check ' + inputValue + ' again!'
      form.insertBefore(feedbackDiv, button)
    } else {
      let n = (inputValue).toString(16)
      return n
    }
  }

  function rgbToHex(R, G, B) {
    let hex = toHex(R) + toHex(G) + toHex(B)
    return hex
  }

  function submitForm() {
    event.preventDefault()

    let rValue = parseInt(rLabelinput.value)
    let gValue = parseInt(gLabelinput.value)
    let bValue = parseInt(bLabelinput.value)

    let hex = rgbToHex(rValue, gValue, bValue)

    if (!(inputError(rValue) || inputError(gValue) || inputError(bValue))) {
      let hexSlot = document.querySelector("#hexSlot")
      hexSlot.innerHTML = `
      <div class="card mt-4">
        <div class="card-title">${hex}</div>
      </div>

      <div class="hexColor" style="background-color:#${hex}"></div>
    `
    }
  }

  //event listeners
  form.addEventListener('submit', submitForm)

  //don't know how to show preview color of each RGB inputValue
  //don't know how to clear error message once the number is changed
})()