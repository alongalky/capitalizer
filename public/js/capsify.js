var capitalize = function (word) {
  if (!word || word.length === 0) {
    return word
  }

  return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
}

var onTextChange = function () {
  var textarea = document.getElementById('capsify-textarea')
  var newValue = textarea.value.replace(/\w+/g, capitalize)
  textarea.value = newValue
}

// Initialize clipboard.js
var btn = document.getElementById('btn-copy')
var clipboard = new Clipboard(btn)
clipboard.on('success', function (e) {
  console.log(e)
})
clipboard.on('error', function (e) {
  console.log(e)
})
