
/*
2. Define a function max() that takes two numbers as arguments and returns the largest of them. 
Use the if-then-else construct available in Javascript.
*/
function max(a, b){
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
};
/*
3. Define a function maxOfThree() that takes three numbers as arguments 
and returns the largest of them.
*/
function maxOfThree(a, b, c) {
    if (a < b) {
        a = b;
    }
    if (a < c) {
        a = c;
    }
    return a;
};
/*
4. Write a function isVowel() that takes a character (i.e. a string of length 1) and 
returns true if it is a vowel, false otherwise.
*/
function isVowel(s) {
    var res;
    s = s.toUpperCase();
    res = (s == "A" || s == "E" || s == "I" || s == "O" || s == "U");
    return res;
};
/*
5. Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/
function sum(arr) {
    return arr.reduce(function (prevValue, elem, i, array) {
        return prevValue + elem;
    });
};
function multiply(arr) {
    return arr.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
};
/*
6. Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj".
*/
function reverse(s) {
    return s.split("").reverse().join("");
}
/*
7. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*/
function findLongestWord(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b, "");
}
/*
8. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*/
function filterLongWords(arr, i) {
    return arr.filter((a) => { return a.length > i });
}
/*
9. Modify the jsfiddle on the map/filter/reduce slide as follows:

a) multiply each element by 10; 

b) return array with all elements equal to 3; 

c) return the product of all elements;
*/

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log(b);
const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log(c);
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
console.log(d);

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
console.log(d2);
console.log(d3);

/*
 * assignment report should include a comment on how long it took,
 * and describe something that you learned from the exercise or 
 * some problem you encountered, etc.
 */
/*
 * For each function you write you should show some test output.  
 * E.g., you should have a series of console.log statements such as the following:
console.log("Expected output of max(20,10) is 10 and  " +
   myFunctionTest(10, function(){return max( 20, 10); );
the first argument to myFunctionTest should be the expected value for the test
the second argument to myFunctionTest should be an anonymous function expression containing a single return statement, 
which returns the result of the function call with the test arguments
myFunctionTest should return "TEST SUCCEEDED" or "TEST FAILED"
in addition to myFunctionTest you should use console.assert for the same inputs and expected values for each myFunctionTest
This is somewhat repetitive to myFunctionTest.  It is another means of testing and validating your code.
 */
function myFunctionTest(exp, func){
    var res = "TEST FAILED";
    var real = func();
    var cond = JSON.stringify(exp) === JSON.stringify(real);
    if (cond) {
        res = "TEST SUCCEEDED";
    }
    console.assert(cond, "--TEST FAILED Expected: " + exp);
    return res;
}
/*Test*/
console.log("Expected output of max(20,10) is 20 and " + myFunctionTest(20, function () { return max(20, 10); }));
console.log("Expected output of maxOfThree(20, 10, 30) is 30 and "
    + myFunctionTest(30, function () { return maxOfThree(20, 10, 30); }));
console.log("Expected output of isVowel(\"a\") is true and " + myFunctionTest(true, function () { return isVowel("a"); }));
console.log("Expected output of isVowel(\"b\") is false and " + myFunctionTest(false, function () { return isVowel("b"); }));
console.log("Expected output of sum([1,2,3,4]) is 10 and " + myFunctionTest(10, function () { return sum([1, 2, 3, 4]); }));
console.log("Expected output of multiply([1,2,3,4]) is 24 and " + myFunctionTest(24, function () { return multiply([1, 2, 3, 4]); }));
console.log("Expected output of reverse(\"jag testar\") is \"ratset gaj\" and " + myFunctionTest("ratset gaj", function () { return reverse("jag testar"); }));
console.log("Expected output of findLongestWord(['abc','abcde','acda']) is \"abcde\" and " + myFunctionTest("abcde", function () { return findLongestWord(['abc', 'abcde', 'acda']); }));
console.log("Expected output of filterLongWords(['abc','abcde','acda'], 3) is [\"abcde\",\"acda\"] and "
    + myFunctionTest(["abcde","acda"], function () { return filterLongWords(['abc', 'abcde', 'acda'], 3); }));