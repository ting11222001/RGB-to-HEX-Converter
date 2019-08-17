(function () {

  //init
  const form = document.forms[0]
  const rLabel = document.querySelector('#rLabel')
  const gLabel = document.querySelector('#gLabel')
  const bLabel = document.querySelector('#bLabel')
  const button = document.querySelector('button')

  //function
  function inputError(inputValue) {
    let rValue = parseInt(rLabelinput.value)
    let gValue = parseInt(gLabelinput.value)
    let bValue = parseInt(bLabelinput.value)

    if (inputValue < 0 || inputValue > 255 || Number.isNaN(inputValue) || !Number.isInteger(inputValue)) {
      let alertDiv = document.querySelector('#alert')
      alertDiv.innerHTML = `
      <div class="alert alert-primary" role="alert">oops! check  among ${rValue}, ${gValue}, ${bValue} again!</div>
      `
      return true
    }
  }

  function toHex(inputValue) {
    if (!inputError(inputValue)) {
      let n = (inputValue).toString(16)
      if (n.length < 2) {
        n = '0' + n
      }
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
    let rHex = rgbToHex(rValue, 0, 0)
    let gHex = rgbToHex(0, gValue, 0)
    let bHex = rgbToHex(0, 0, bValue)

    if (!(inputError(rValue) || inputError(gValue) || inputError(bValue))) {
      //once submit all slots' contents i.e. colors will change. innerHTML is being replaced once convert is clicked.
      let hexSlot = document.querySelector("#hexSlot")
      hexSlot.innerHTML = `
      <div class="card mt-4">
        <div class="card-title">${hex}</div>
      </div>
      <div class="hexColor" style="background-color:#${hex}"></div>
      `
      let rPreviewSlot = document.querySelector("#rPreviewSlot")
      rPreviewSlot.innerHTML = `
      <div class="rPreviewColor" style="background-color:#${rHex}"></div>
      `
      let gPreviewSlot = document.querySelector("#gPreviewSlot")
      gPreviewSlot.innerHTML = `
      <div class="gPreviewColor" style="background-color:#${gHex}"></div>
      `
      let bPreviewSlot = document.querySelector("#bPreviewSlot")
      bPreviewSlot.innerHTML = `
      <div class="bPreviewColor" style="background-color:#${bHex}"></div>
      `
    }
  }

  //event listeners
  form.addEventListener('submit', submitForm)

  //don't know how to clear error message once the number is changed
})()