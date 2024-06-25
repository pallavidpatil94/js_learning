// 28-May-2024
console.log('======== Length & square of the words ===========');
var squareOfWordLength = function(js, google, developer){
    var len = js.length;
    console.log(`a. The length of "Javascript" len is : ${len}`);
    var jsResult = len * len;
    console.log(`--> Javascript multiplication result is jsResult = ${jsResult}`);

    var len1 = google.length;
    console.log(`b. The length of "Google Chrome" len1 is : ${len1}`);
    var googleResult = len1 * len1;
    console.log(`--> Google chrome multiplication result is googleResult = ${googleResult}`);
    
    var len2 = developer.length;
    console.log(`c. The length of "Developer Smart" len2 is : ${len2}`);
    var developerResult = len2 * len2;
    console.log(`--> Developer Smart multiplication result is developerResult = ${developerResult}`);

    // return googleResult, jsResult, developerResult;
    // return googleResult;
    // return jsResult;
    // return developerResult;
}
var returnValue = squareOfWordLength("Javascript", "Google Chrome", "Developer Smart");
// console.log(`The length of return value of "Javascript" is : ${returnValue}`);

// var returnValue = squareOfWordLength("Google Chrome");
// console.log(`The length of return value of "Google Chrome" is : ${returnValue}`);

// var returnValue = squareOfWordLength("Developer Smart");
// console.log(`The length of return value of "Developer Smart" is : ${returnValue}`);

console.log('======== Length & divide by total no. of the words ===========');
var deveOps = function () {
    var sentence = "I am a ReactJs Developer";
    console.log(`Sentence : ${sentence}`);

    sentLength = sentence.length;
    console.log(`1. The sentence length is : ${sentLength}`);

    sentSplit = sentence.split(" ");
    console.log(`2. The sentence (split) removed space's between words is : ${sentSplit}`);
    sentSplitLen = sentSplit.length;
    console.log(`3. The number of words available in sentence is : ${sentSplitLen}`);

    stentDiv = sentLength/sentSplitLen
    console.log(`4. The division of length by total no. of word : ${stentDiv}`);

    stentMulti = sentLength*sentSplitLen
    console.log(`5. The multiplication of length by total no. of word : ${stentDiv}`);

}
deveOps();