function assignment(){
    var str = "  Hey you are doing good, keep it up   ";
    console.log("1. The str is :", str);

    var strLength = str.length
    console.log("2. The Length of the str is :", strLength);

    strTrim = str.trim();
    console.log("3. str length after the using trim() method :", strTrim.length);
    console.log(`4. Total number of extra space count : ${strLength - strTrim.length}`);

    // Printing the Firs & Last character using slice() method
    firstChar = strTrim.slice(0, 1);
    lastChar = strTrim.slice(-1);
    console.log(`5. First character: ${firstChar} & Last character: ${lastChar}`);

    // Printing the Firs & Last character using  Substring() method
    // firstChar1 = strTrim.substring(0, 1);
    // lastChar1 = strTrim.substring(strTrim.length - 1);
    // console.log(`5. First character : ${firstChar1}`);
    // console.log(`5. Last character: ${lastChar1}`);

    // Printing count of total words after trim()
    var strSplit = strTrim.split(" ");
    console.log(`6. The count of total word after the trim() is : ${strSplit.length}`);

    var strIndex = str.indexOf("good");
    console.log(`7. The index of word "good" from the given string is : ${strIndex}`);

    var strSubstring = str.substring(22);
    console.log(`8. The substring is starting from 22 is : ${strSubstring}`);

    var strTrimInclude = strTrim.includes("up")
    console.log(`9. The string ends with the word "up" after the trim is : ${strTrimInclude}`);

    console.log(`10. The string ends with the word "Hey" after the trim is : ${strTrimInclude}`);

}
assignment();