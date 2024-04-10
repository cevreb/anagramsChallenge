# Kenzie Academy Challenge: Anagrams 

Follow the instructions provided on `kenzie.instructure` for this challenge. The `script.js` file is a placeholder. Feel free to rename it or add additional files to the project.

*However, leave `words.js` unmodified.*

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)).

## Project Plan

# Build a function to find the anagrams: 
    -Clear the content of the "results" element

    -Get the input value from the "inputText" element and change it to lowercase

    -Create an array 'anagrams' by filtering 'words' using the areAnagrams function

    -Get the results container element from the HTML

    -If the length of 'anagrams' is greater than 0:
        Create a new paragraph element 'resultElement'
        Set the content of 'resultElement' to "Anagrams: " & join 'anagrams' with ", "
        Append the 'resultElement' to the "results" container
    Otherwise:
        Create a new paragraph element 'resultElement'
        Set the text content of 'resultElement' to "No anagrams found."
        Append 'resultElement' to the "results" container
End the function

Function areAnagrams, will take 2 strings as arguments
    Sort the characters of 'str1' to make them alphabetical and assign the value to 'sortedStr1'
    Sort the characters of 'str2' to make them alphabetical and assign the value to 'sortedStr2'

    Return whether 'sortedStr1' is equal to 'sortedStr2'
End the function 


## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

When I first started this challenge, I knew that I would need to figure out a way to sort all of the words into alphabetical order to compare them wtih the text input. After researching the best way to implement this, I found that using sort() was the best approach. I also knew that if the input in the text box was capitalized, it probably wouldnt work, so I converted everything to lowercase. 