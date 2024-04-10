function findAnagrams() {
  document.getElementById("results").innerHTML = "";

  const userInput = document.getElementById("inputText").value.toLowerCase();

  const anagrams = words.filter((word) =>
    areAnagrams(userInput, word.toLowerCase())
  );

  const resultsContainer = document.getElementById("results");
  if (anagrams.length > 0) {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Anagrams: " + anagrams.join(", ");
    resultsContainer.appendChild(resultElement);
  } else {
    const resultElement = document.createElement("p");
    resultElement.textContent = "No anagrams found.";
    resultsContainer.appendChild(resultElement);
  }
}

function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
