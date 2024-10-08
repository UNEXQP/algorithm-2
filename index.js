function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 1; // Start at 1 assuming there's at least one word
    let vowelCounter = 0;
  
    // Define a set of vowels for easy comparison
    const vowels = 'aeiouAEIOU';
  
    // Loop through each character in the sentence except the last character (the period)
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      // Increase length counter for each character
      lengthCounter++;
  
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        vowelCounter++;
      }
  
      // Check if the character is a space to count words
      if (char === ' ') {
        wordCounter++;
      }
  
      // Stop when a period is encountered (assumes the last character is a period)
      if (char === '.') {
        lengthCounter--; // Adjust for the period
        break;
      }
    }
  
    // Output results
    console.log(`Sentence Length: ${lengthCounter}`);
    console.log(`Number of Words: ${wordCounter}`);
    console.log(`Number of Vowels: ${vowelCounter}`);
  }
  
  // Test the function
  analyzeSentence("This is a sample sentence.");
  