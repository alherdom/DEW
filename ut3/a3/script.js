function checkSentence() {
  const sentenceValue = document.getElementById("sentence").value;
  const wordValue = document.getElementById("word").value;
  const sizeElement = document.getElementById("size");
  const positionElement = document.getElementById("position");

  const size = sentenceValue.length;
  const position = sentenceValue.lastIndexOf(wordValue);

  sizeElement.innerHTML = size;
  if (position !== -1) {
    positionElement.innerHTML = position;
  } else {
    positionElement.innerHTML = "The word was not found in the sentence.";
  }
}
