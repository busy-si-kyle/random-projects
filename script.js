function countPhrase() {
  const text = document.getElementById('textInput').value.toLowerCase();
  const phrase = document.getElementById('phraseInput').value.toLowerCase().trim();

  if (phrase === "") {
    document.getElementById('result').innerText = "Please enter a phrase.";
    return;
  }

  const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const matches = text.match(regex);
  const count = matches ? matches.length : 0;

  document.getElementById('result').innerText = `Occurrences: ${count}`;
}
