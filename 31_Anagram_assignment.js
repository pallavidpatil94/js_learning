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
  