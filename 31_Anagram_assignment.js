function areAnagrams(str1, str2) {
    // Helper function to clean and sort a string
    function cleanString(str) {
      return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }
  
    // Compare the cleaned and sorted versions of the strings
    return cleanString(str1) === cleanString(str2);
  }
  
  // Example pairs of strings
  const pairs = [
    ["vile", "evil"],
    ["silent", "listen"],
    ["gram", "aram"],
    ["mom", "tom"]
  ];
  
  // Check each pair and log the results
  pairs.forEach(pair => {
    const [str1, str2] = pair;
    if (areAnagrams(str1, str2)) {
      console.log(`${str1} and ${str2} are anagrams.`);
    } else {
      console.log(`${str1} and ${str2} are NOT anagrams.`);
    }
  });
  

//   Explaination
// str.replace(/[^\w]/g, ''):

// str.replace(): This method replaces specified parts of the string with another string.
// /[^\w]/g: This is a regular expression used to find all non-word characters.
// [^\w]: This part of the regex matches any character that is not a word character (i.e., it negates \w, which matches any letter, digit, or underscore).
// /g: This is a global flag that ensures all occurrences of non-word characters in the string are replaced.
// '': This is the replacement string, which is an empty string, effectively removing all non-word characters from the string.
// Example:

// let str = "Hello, World!";
// let cleanedStr = str.replace(/[^\w]/g, '');
// console.log(cleanedStr); // Output: "HelloWorld"
// .toLowerCase():

// This method converts all the characters in the string to lowercase.
// Example:

// let str = "HelloWorld";
// let lowerCaseStr = str.toLowerCase();
// console.log(lowerCaseStr); // Output: "helloworld"
// .split(''):

// This method splits the string into an array of its individual characters.
// Example:

// let str = "helloworld";
// let charArray = str.split('');
// console.log(charArray); // Output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
// .sort():

// This method sorts the elements of the array in ascending order. By default, it sorts based on the Unicode values of characters.
// Example:

// let charArray = ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"];
// let sortedArray = charArray.sort();
// console.log(sortedArray); // Output: ["d", "e", "h", "l", "l", "l", "o", "o", "r", "w"]
// .join(''):

// This method joins all the elements of the array back into a single string, with an empty string ('') as the separator.
// Example:

// let sortedArray = ["d", "e", "h", "l", "l", "l", "o", "o", "r", "w"];
// let sortedStr = sortedArray.join('');
// console.log(sortedStr); // Output: "dehllloorw"
// Putting It All Together
// When combined, the entire expression processes the input string to produce a normalized, sorted version of the string's characters:

// let str = "Hello, World!";
// let processedStr = str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// console.log(processedStr); // Output: "dehllloorw"
// Application in Anagram Check
// This processed string can then be compared with the processed version of another string to determine if they are anagrams. Anagrams will produce identical processed strings when they contain the same characters with the same frequencies.

// For example:

// let str1 = "vile";
// let str2 = "evil";

// let processedStr1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// let processedStr2 = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

// console.log(processedStr1); // Output: "eilv"
// console.log(processedStr2); // Output: "eilv"
// console.log(processedStr1 === processedStr2); // Output: true (indicating they are anagrams)
// This method effectively standardizes the input strings for anagram comparison.