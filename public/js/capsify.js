var capitalize = function (word) {
  if (!word || word.length === 0) {
    return word
  }

  return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
}

var onCapsifyClick = function () {
  var textarea = document.getElementById('capsify-textarea')
  var newValue = textarea.value.replace(/\b\w/g, capitalize)
  textarea.value = newValue
}
