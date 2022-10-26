// Create form and output variables here
const form = document.querySelector('form');
const output = document.querySelector('.output');

const toStudly = function(event) {
  // Refactor to assign value from form field
  event.preventDefault();

  const sentence = form.word.value;
  let newWord = "";

  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      const result = sentence.charAt(i).toLowerCase();
      newWord += result
    } else {
      const result = sentence.charAt(i).toUpperCase();
      newWord += result
    }
  }

  // Refactor to output response to paragraph element  
  output.innerHTML = `"${sentence}" becomes "${newWord}" as studly case!`;

}

// Add `submit` event listener to button here
form.addEventListener('submit', toStudly);